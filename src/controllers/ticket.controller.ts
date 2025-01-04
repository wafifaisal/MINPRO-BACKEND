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
<<<<<<< HEAD
      console.log(req.params.eventId);
      const eventId = req.params.eventId;

      req.body.eventId = req.params.eventId;
      const tickets = req.body.tickets;
      for (let i = 0; i < tickets.length; i++) {
        tickets[i].eventId = eventId;
      }
      await prisma.ticket.createMany({ data: req.body.tickets });
      res.status(200).send({ message: "Ticket has been created" });
    } catch (err) {
      console.log(err);
=======
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
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
      res.status(400).send(err);
    }
  }
}
