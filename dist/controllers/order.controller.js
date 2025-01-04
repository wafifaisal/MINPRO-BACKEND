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
                const userId = "15d455f7-9c74-4581-aca4-e1bb6a171b56"; // Contoh user ID
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
                yield Promise.all(ticketCart.map((item) => __awaiter(this, void 0, void 0, function* () {
                    if (item.quantity > item.Ticket.seats) {
                        throw new Error(`Insufficient seats for ticket ID: ${item.Ticket.id}`);
                    }
                    // Create order details
                    yield prisma_1.default.order_Details.create({
                        data: {
                            orderId: id,
                            ticketId: item.Ticket.id,
                            quantity: item.quantity,
                            subtotal: item.quantity * item.Ticket.price,
                        },
                    });
                    // Update ticket seats
                    yield prisma_1.default.ticket.update({
                        data: { seats: { decrement: item.quantity } },
                        where: { id: item.Ticket.id },
                    });
                })));
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
                const { orderId, gross_amount } = req.body;
                const item_details = [];
                const checkTransaction = yield prisma_1.default.order.findUnique({
                    where: { id: orderId },
                    select: { status: true, expiredAt: true },
                });
                if ((checkTransaction === null || checkTransaction === void 0 ? void 0 : checkTransaction.status) === "cancelled")
                    throw "You cannot continue transaction, as your delaying transaction";
                const resMinutes = new Date(`${checkTransaction === null || checkTransaction === void 0 ? void 0 : checkTransaction.expiredAt}`).getTime() -
                    new Date().getTime();
                const duration = Math.ceil(resMinutes / 60000);
                const ticketTransaction = yield prisma_1.default.order_Details.findMany({
                    where: { orderId: orderId },
                    include: {
                        Ticket: {
                            select: {
                                category: true,
                            },
                        },
                    },
                });
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: "15d455f7-9c74-4581-aca4-e1bb6a171b56" },
                });
                for (const item of ticketTransaction) {
                    item_details.push({
                        id: item.ticketId,
                        name: item.Ticket.category,
                        price: item.subtotal / item.quantity,
                        quantity: item.quantity,
                        category: item.Ticket.category,
                    });
                }
                const snap = new midtransClient.Snap({
                    isProduction: false,
                    serverKey: process.env.MID_SERVER_KEY,
                });
                const parameter = {
                    transaction_details: {
                        order_id: orderId.toString(),
                        gross_amount: gross_amount,
                    },
                    customer_details: {
                        first_name: user === null || user === void 0 ? void 0 : user.firstName,
                        last_name: user === null || user === void 0 ? void 0 : user.lastName,
                        email: user === null || user === void 0 ? void 0 : user.email,
                    },
                    item_details,
                    page_expiry: {
                        unit: "minutes",
                        duration: duration,
                    },
                    expiry: {
                        unit: "minutes",
                        duration: duration,
                    },
                };
                const order = yield snap.createTransaction(parameter);
                console.log("Generated token:", order.token); // Log token
                res.status(200).send({ result: order.token });
            }
            catch (err) {
                console.log("Error generating token:", err);
                res
                    .status(400)
                    .send({ error: "An unknown error occurred while fetching the token" });
            }
        });
    }
    midtransWebHook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { transaction_status, order_id } = req.body;
                console.log("Order_ID :", +order_id);
                const statusOrder = transaction_status === "settlement"
                    ? "success"
                    : transaction_status === "pending"
                        ? "pending"
                        : "cancelled";
                if (statusOrder === "cancelled") {
                    const tickets = yield prisma_1.default.order_Details.findMany({
                        where: { orderId: +order_id },
                        select: {
                            quantity: true,
                            ticketId: true,
                        },
                    });
                    for (const item of tickets) {
                        yield prisma_1.default.ticket.update({
                            where: { id: item.ticketId },
                            data: { seats: { increment: item.quantity } },
                        });
                    }
                }
                yield prisma_1.default.order.update({
                    where: { id: +order_id },
                    data: {
                        status: statusOrder,
                    },
                });
                res.status(200).send({ message: "Success" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.OrderController = OrderController;
