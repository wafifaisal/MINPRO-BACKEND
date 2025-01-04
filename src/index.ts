import express, { Application, Request, Response } from "express";
import cors from "cors";
import { EventRouter } from "./routers/event.router";
import { AuthRouter } from "./routers/auth.router";
import { UserRouter } from "./routers/user.router";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

import { OrgAuthRouter } from "./routers/org.router";
import { TicketRouter } from "./routers/ticket.router";
import { OrderRouter } from "./routers/order.router";
<<<<<<< HEAD
=======
import { ReviewRouter } from "./routers/review.router";
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
import { UserController } from "./controllers/user.controller";

const PORT: number = 8000;
const app = express();
const userController = new UserController();
export const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());
app.use(
  cors({
    origin: process.env.BASE_URL_FE,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
<<<<<<< HEAD
  }),
=======
  })
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
);
console.log("CORS Origin:", process.env.BASE_URL_FE); // Debugging CORS

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my API");
});

const eventRouter = new EventRouter();
const ticketRouter = new TicketRouter();
const userRouter = new UserRouter();
const authRouter = new AuthRouter();
const orgAuthRouter = new OrgAuthRouter();
const orderRouter = new OrderRouter();
<<<<<<< HEAD
=======
const reviewRouter = new ReviewRouter();
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841

app.use("/api", userRouter.getRouter());
app.use("/api/events", eventRouter.getRouter());
app.use("/api/tickets", ticketRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/auth", authRouter.getRouter());
app.use("/api/organizer", orgAuthRouter.getRouter());
app.use("/api/order", orderRouter.getRouter());
<<<<<<< HEAD
=======
app.use("/api/reviews", reviewRouter.getRouter());
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841

console.log(process.env.JWT_KEY);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
