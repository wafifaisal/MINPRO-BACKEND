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
      res.status(400).send(err);
    }
  }
}
