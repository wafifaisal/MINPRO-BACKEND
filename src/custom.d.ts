import "express";
import * as jwt from "jsonwebtoken";

export type IPayload = {
  id: string;
};

declare global {
  namespace Express {
    export interface Request {
      user?: IPayload;
      organizer?: IPayload;
    }
  }
}

declare module "jsonwebtoken" {
  export interface RoleIdJwtPayload extends jwt.JwtPayload {
    id: string;
  }
}
