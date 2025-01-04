import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import prisma from "../prisma"; // Prisma client

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
  next: NextFunction,
): Promise<void> => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    res.status(403).send({ message: "Token is required!" });
    return; // Ensure function ends here
  }

  try {
    // Decode the token
    const decoded: { id: string } = verify(token, process.env.JWT_KEY!) as {
      id: string;
    };

    // Check if the token corresponds to a user
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      }, // Fetch specific fields only
    });

    if (user) {
      req.userId = user.id;
      req.isOrganizer = false; // Not an organizer
      req.body.userData = user; // Attach user data to the request
      next();
      return; // Ensure function ends here
    }

    // If not found, check if it's an organizer
    const organizer = await prisma.organizer.findUnique({
      where: { id: decoded.id },
    });

    if (organizer) {
      req.userId = organizer.id;
      req.isOrganizer = true; // Is an organizer
      next();
      return; // Ensure function ends here
    }

    res.status(403).send({ message: "Invalid token" });
  } catch (err) {
    console.error(err);
    res.status(401).send({ message: "Unauthorized" });
  }
};
