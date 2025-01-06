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
import { ReviewRouter } from "./routers/review.router";
// import { UserController } from "./controllers/user.controller";

const PORT: number = 8000;
const app: Application = express();
export const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());
app.use(cors());

// Middleware untuk log setiap request yang diterima
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`); // Log method dan URL request
//   next();
// });

console.log("CORS Origin:", process.env.BASE_URL_FE);

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my API");
});

const eventRouter = new EventRouter();
const ticketRouter = new TicketRouter();
const userRouter = new UserRouter();
const authRouter = new AuthRouter();
const orgAuthRouter = new OrgAuthRouter();
const orderRouter = new OrderRouter();
const reviewRouter = new ReviewRouter();

app.use("/api/events", eventRouter.getRouter());
app.use("/api/tickets", ticketRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/auth", authRouter.getRouter());
app.use("/api/organizer", orgAuthRouter.getRouter());
app.use("/api/order", orderRouter.getRouter());
app.use("/api/reviews", reviewRouter.getRouter());

console.log(process.env.JWT_KEY);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
