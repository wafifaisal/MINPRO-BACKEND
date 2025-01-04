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
exports.TicketController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class TicketController {
    getTickets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tickets = yield prisma_1.default.ticket.findMany({
                    where: { eventId: req.params.eventId },
                });
                res.status(200).send({ result: tickets });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    createTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventId = req.params.eventId;
            try {
                console.log(eventId);
                // Ensure the eventId is included in the request body
                req.body.eventId = eventId;
                // Map over tickets to add eventId to each
                const tickets = req.body.tickets.map((ticket) => (Object.assign(Object.assign({}, ticket), { eventId })));
                // Fetch event_type from the Event table
                const event = yield prisma_1.default.event.findUnique({
                    where: { id: eventId },
                    select: { event_type: true },
                });
                // If the event type is "Free", set the ticket price to 0
                const updatedTickets = tickets.map((ticket) => (Object.assign(Object.assign({}, ticket), { price: (event === null || event === void 0 ? void 0 : event.event_type) === "Free" ? 0 : ticket.price })));
                // Insert tickets into the database
                yield prisma_1.default.ticket.createMany({ data: updatedTickets });
                res.status(200).send({ message: "Tickets have been created" });
            }
            catch (err) {
                console.error(err);
                res.status(500).send({ message: "Internal server error", error: err });
            }
        });
    }
}
exports.TicketController = TicketController;
