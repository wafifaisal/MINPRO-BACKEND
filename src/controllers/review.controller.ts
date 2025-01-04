import { Request, Response } from "express";
import prisma from "../prisma";

export class ReviewController {
  async createReview(req: Request, res: Response) {
    try {
      await prisma.review.create({
        data: { ...req.body, userId: req.user?.id, eventId: req.params.id },
      });
      res.status(200).send({ message: "Review Created" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getReviews(req: Request, res: Response) {
    try {
      const reviews = await prisma.review.findMany({
        where: { eventId: req.params.id },
        select: {
          rating: true,
          comment: true,
          createdAt: true,
          user: {
            select: {
              avatar: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      });
      res.status(200).send({ result: reviews });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
