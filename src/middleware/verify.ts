import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

<<<<<<< HEAD
=======
// Extend Request type to include user property
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        role: string;
      }
    }
  }
}


export const verifyToken = async (
  req: Request,
  res: Response, 
  next: NextFunction
) => {
  try {
    
    const token = req.cookies?.token;
    if (!token) throw { message: "Unauthorize!" };

    const verifiedUser = verify(token, process.env.JWT_KEY!) as {
      id: number;
      role: string;
    };

    req.user = verifiedUser;

    next();
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role == "Admin") {
    next();
  } else {
    res.status(400).send({ message: "Unauthorize, Admin only!" });
  }
};