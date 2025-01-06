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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const client_1 = require("@prisma/client");
const cloudinary_1 = require("../services/cloudinary");
const prisma = new client_1.PrismaClient();
class EventController {
    getEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search } = req.query;
                const filter = {};
                if (search) {
                    filter.event_name = { contains: search, mode: "insensitive" };
                }
                const currentDate = new Date();
                filter.event_date = { gt: currentDate };
                const events = yield prisma.event.findMany({
                    where: filter,
                    select: {
                        id: true,
                        category: true,
                        event_name: true,
                        event_thumbnail: true,
                        event_preview: true,
                        start_time: true,
                        end_time: true,
                        event_date: true,
                        venue: true,
                        location: true,
                        Ticket: {
                            select: {
                                id: true,
                                category: true,
                                desc: true,
                                price: true,
                                seats: true,
                            },
                        },
                        Organizer: {
                            select: {
                                organizer_name: true,
                                avatar: true,
                            },
                        },
                    },
                });
                // console.log("Fetched events:", events);
                res.status(200).send({ events });
            }
            catch (err) {
                console.error("Error fetching events:", err);
                res.status(400).send({ error: "Failed to fetch events" });
            }
        });
    }
    getEventbyID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = yield prisma.event.findUnique({
                    where: { id: req.params.id },
                    select: {
                        id: true,
                        event_name: true,
                        description: true,
                        category: true,
                        location: true,
                        start_time: true,
                        end_time: true,
                        event_date: true,
                        event_thumbnail: true,
                        event_preview: true,
                        venue: true,
                        event_type: true,
                        coupon_seat: true,
                        Ticket: {
                            select: {
                                id: true,
                                category: true,
                                desc: true,
                                price: true,
                                seats: true,
                                Order_Details: {
                                    select: {
                                        quantity: true,
                                        subtotal: true,
                                    },
                                },
                            },
                        },
                        Organizer: {
                            select: {
                                organizer_name: true,
                                avatar: true,
                            },
                        },
                    },
                });
                res.status(200).send({ result: event });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    createEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "Image is required" };
<<<<<<< HEAD
                const file = req.file;
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(file, "event");
                const { event_name, description, location, venue, start_time, end_time, event_date, event_type, category, event_preview, coupon_seat, } = req.body;
                const organizerId = (_a = req.organizer) === null || _a === void 0 ? void 0 : _a.id.toString();
                console.log("ORGANIZER ID : ", organizerId);
=======
                // Proses file dan upload ke Cloudinary
                const file = req.file;
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(file, "event");
                // Mengambil properti dari req.body secara eksplisit
                const { event_name, description, location, venue, start_time, end_time, event_date, event_type, category, event_preview, coupon_seat, } = req.body;
                //const organizerId = req.organizer?.id.toString();
                // console.log("ORGANIZER ID : ", organizerId);
>>>>>>> 483d4e2ca03a7ddb90d20adcd246a8cfb033fd3d
                const couponSeat = coupon_seat ? Number(coupon_seat) : undefined;
                // Data yang akan dikirim ke database
                const eventData = {
                    event_name,
                    event_thumbnail: secure_url,
                    description,
                    venue,
                    location,
                    start_time,
                    end_time,
                    event_type,
                    category,
                    event_date,
                    event_preview,
                    coupon_seat: couponSeat,
<<<<<<< HEAD
                    organizerId,
=======
                    //   organizerId,
>>>>>>> 483d4e2ca03a7ddb90d20adcd246a8cfb033fd3d
                };
                // Simpan ke database
                const { id } = yield prisma.event.create({
                    data: eventData,
                });
                res.status(200).send({ message: "event created", eventId: id });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.EventController = EventController;
