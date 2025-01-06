import { Request, Response } from "express";
import prisma from "../prisma";

export class ReviewController {
  async createReview(req: Request, res: Response) {
    try {
      const userId = "379d85ed-5f54-4336-a871-321c5c18c2fc";
      const { comment, rating } = req.body;
      const user = await prisma.review.findFirst({
        where: { userId: userId },
      });
      if (user) throw { message: "You are just granted to give comment once" };

      await prisma.review.create({
        data: {
          userId: userId,
          eventId: req.params.id,
          rating: rating,
          comment: comment,
        },
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
