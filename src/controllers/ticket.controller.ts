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
    try {
      const eventId = req.params.eventId;
      req.body.eventId = eventId;

      // Ambil event_type dari tabel Event
      const event = await prisma.event.findUnique({
        where: { id: eventId },
        select: { event_type: true },
      });

      const tickets = req.body.tickets.map((ticket: any) => ({
        ...ticket,
        eventId,
        price: event?.event_type === "Free" ? 0 : ticket.price,
      }));

      // Simpan tiket ke dalam database
      await prisma.ticket.createMany({ data: tickets });

      res.status(200).send({ message: "Tickets have been created" });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }
}
