import { Request, Response } from "express";
import prisma from "../prisma";
import { Prisma } from "../../prisma/generated/client";

export class UserProfileController {
  async getUsers(req: Request, res: Response) {
    try {
      console.log("req.user adalah:", req.user);

      const filter: Prisma.UserWhereInput = {};
      const { search } = req.query;
      if (search) {
        filter.OR = [
          { firstName: { contains: search as string } },
          { lastName: { contains: search as string } },
          { email: { contains: search as string, mode: "insensitive" } },
        ];
      }
      const users = await prisma.user.findMany({ where: filter });
      res.status(200).send({ users });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getUserId(req: Request, res: Response) {
    try {
      const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      res.status(200).send({ result: user });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getEventsUser(req: Request, res: Response) {
    try {
      const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";

      if (req.organizer) throw { message: "Organizer is not granted" };

      const filter: Prisma.EventWhereInput = {};
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
      } else if (type === "unactive") {
        filter.event_date = {
          gt: new Date(),
        };
      }

      const events = await prisma.event.findMany({
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
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getTicketsUser(req: Request, res: Response) {
    try {
      const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";

      const tickets = await prisma.ticket.findMany({
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
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getAmountTicketsUser(req: Request, res: Response) {
    try {
      const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";

      const amountTickets = await prisma.order_Details.aggregate({
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
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getUserCoupon(req: Request, res: Response) {
    try {
      const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";
      console.log(userId);

      const userCoupon = await prisma.userCoupon.findFirst({
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
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getPointsUser(req: Request, res: Response) {
    try {
      const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";
      const points = await prisma.userPoint.aggregate({
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
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
