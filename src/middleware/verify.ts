import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import prisma from "../prisma";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      isOrganizer?: boolean;
    }
  }
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(403).send({ message: "Token is required!" });
    return;
  }

  try {
    const decoded: { id: string } = verify(token, process.env.JWT_KEY!) as {
      id: string;
    };

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
    });

    if (user) {
      req.userId = user.id;
      req.isOrganizer = false;
      req.body.userData = user;
      next();
      return;
    }

    const organizer = await prisma.organizer.findUnique({
      where: { id: decoded.id },
    });

    if (organizer) {
      req.userId = organizer.id;
      req.isOrganizer = true;
      next();
      return;
    }

    res.status(403).send({ message: "Invalid token" });
  } catch (err) {
    console.error(err);
    res.status(401).send({ message: "Unauthorized" });
  }
};
