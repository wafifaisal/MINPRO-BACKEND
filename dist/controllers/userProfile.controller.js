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
exports.UserProfileController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class UserProfileController {
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("req.user adalah:", req.user);
                const filter = {};
                const { search } = req.query;
                if (search) {
                    filter.OR = [
                        { firstName: { contains: search } },
                        { lastName: { contains: search } },
                        { email: { contains: search, mode: "insensitive" } },
                    ];
                }
                const users = yield prisma_1.default.user.findMany({ where: filter });
                res.status(200).send({ users });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                });
                res.status(200).send({ result: user });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getEventsUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";
                if (req.organizer)
                    throw { message: "Organizer is not granted" };
                const filter = {};
                filter.Ticket = {
                    some: {
                        Order_Details: {
                            some: {
                                Order: {
                                    AND: [{ userId: userId }, { status: "success" }],
                                },
                            },
                        },
                    },
                };
                const { type } = req.query;
                if (type === "active") {
                    filter.event_date = {
                        lt: new Date(),
                    };
                }
                else if (type === "unactive") {
                    filter.event_date = {
                        gt: new Date(),
                    };
                }
                const events = yield prisma_1.default.event.findMany({
                    where: filter,
                    select: {
                        id: true,
                        event_name: true,
                        event_thumbnail: true,
                        event_date: true,
                        event_type: true,
                    },
                });
                res.status(200).send({ result: events });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getTicketsUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";
                const tickets = yield prisma_1.default.ticket.findMany({
                    where: {
                        AND: [
                            { eventId: req.params.id },
                            {
                                Order_Details: {
                                    some: {
                                        Order: {
                                            AND: [{ userId: userId }, { status: "success" }],
                                        },
                                    },
                                },
                            },
                        ],
                    },
                    select: {
                        id: true,
                        category: true,
                        desc: true,
                        price: true,
                    },
                });
                res.status(200).send({ result: tickets });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getAmountTicketsUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";
                const amountTickets = yield prisma_1.default.order_Details.aggregate({
                    where: {
                        AND: [
                            {
                                Order: {
                                    AND: [{ userId: userId }, { status: "success" }],
                                },
                            },
                            { ticketId: +req.params.id },
                        ],
                    },
                    _sum: { quantity: true },
                });
                res.status(200).send({ result: amountTickets._sum.quantity });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getUserCoupon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";
                console.log(userId);
                const userCoupon = yield prisma_1.default.userCoupon.findFirst({
                    where: {
                        AND: [
                            { userId: userId },
                            { expiredAt: { gt: new Date() } },
                            { isRedeem: false },
                        ],
                    },
                    select: { isRedeem: true },
                });
                console.log("userCoupon", userCoupon);
                res.status(200).send({ result: userCoupon });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getPointsUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";
                const points = yield prisma_1.default.userPoint.aggregate({
                    where: {
                        AND: [
                            { userId: userId },
                            { isRedeem: true },
                            { expiredAt: { gt: new Date() } },
                        ],
                    },
                    _sum: { point: true },
                });
                res.status(200).send({ result: points._sum.point });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.UserProfileController = UserProfileController;
