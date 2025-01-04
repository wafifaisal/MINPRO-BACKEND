"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const midtransClient = require("midtrans-client");
class OrderController {
    createTransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = "28c71cea-a9b5-43ee-a1cc-dd05bc330385"; // Contoh user ID
                const { total_price, final_price, ticketCart } = req.body;
                const expiredAt = new Date(Date.now() + 10 * 60000); // Expired in 10 minutes
                const { id } = yield prisma_1.default.order.create({
                    data: {
                        userId: userId,
                        total_price,
                        final_price,
                        expiredAt,
                    },
                });
                for (const item of ticketCart) {
                    yield prisma_1.default.order_Details.create({
                        data: {
                            orderId: id,
                            ticketId: item.Ticket.id,
                            quantity: item.quantity,
                            subtotal: item.quantity * item.Ticket.price,
                        },
                    });
                    yield prisma_1.default.ticket.update({
                        data: { seats: { decrement: item.quantity } },
                        where: { id: item.Ticket.id },
                    });
                }
                res.status(200).send({ message: "Transaction created", orderId: id });
            }
            catch (err) {
                console.error("Error creating order:", err);
                res
                    .status(500)
                    .send({ error: "An error occurred while creating the order" });
            }
        });
    }
    // Get transaction details by ID
    getOrderId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield prisma_1.default.order.findUnique({
                    where: { id: +req.params.id },
                    select: {
                        total_price: true,
                        final_price: true,
                        status: true,
                        createdAt: true,
                        expiredAt: true,
                        Order_Details: {
                            select: {
                                quantity: true,
                                subtotal: true,
                                Ticket: {
                                    select: {
                                        category: true,
                                        desc: true,
                                        price: true,
                                        Event: {
                                            select: {
                                                event_name: true,
                                                start_time: true,
                                                end_time: true,
                                                event_date: true,
                                                location: true,
                                                venue: true,
                                                event_thumbnail: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                });
                res.status(200).send({ result: order });
            }
            catch (err) {
                console.error("Error fetching transaction:", err);
                res.status(500).send({
                    error: "An unknown error occurred while fetching the transaction",
                });
            }
        });
    }
    // Generate Snap token for Midtrans
    getSnapToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const snap = new midtransClient.Snap({
                    isProduction: false,
                    serverKey: `${process.env.MID_SERVER_KEY}`,
                });
                const parameters = {
                    transaction_details: req.body,
                };
                const order = yield snap.createTransaction(parameters);
                res.status(200).send({ result: order.token });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.OrderController = OrderController;
