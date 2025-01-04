import { Request, Response } from "express";
import prisma from "../prisma";

export class TicketController {
  async getTickets(req: Request, res: Response) {
    try {
      const tickets = await prisma.ticket.findMany({
        where: { eventId: req.params.eventId },
      });
      res.status(200).send({ result: tickets });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async createTicket(req: Request, res: Response) {
    const eventId = req.params.eventId;
    try {

      console.log(eventId);

      // Ensure the eventId is included in the request body
      req.body.eventId = eventId;

      // Map over tickets to add eventId to each
      const tickets = req.body.tickets.map((ticket: any) => ({
        ...ticket,
        eventId,
      }));

      // Fetch event_type from the Event table
      const event = await prisma.event.findUnique({
        where: { id: eventId },
        select: { event_type: true },
      });

      // If the event type is "Free", set the ticket price to 0
      const updatedTickets = tickets.map((ticket: any) => ({
        ...ticket,
        price: event?.event_type === "Free" ? 0 : ticket.price,
      }));

      // Insert tickets into the database
      await prisma.ticket.createMany({ data: updatedTickets });

      res.status(200).send({ message: "Tickets have been created" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error", error: err });

    }
  }
}
