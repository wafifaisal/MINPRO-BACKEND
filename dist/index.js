"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const event_router_1 = require("./routers/event.router");
const auth_router_1 = require("./routers/auth.router");
const user_router_1 = require("./routers/user.router");
const multer_1 = __importDefault(require("multer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const org_router_1 = require("./routers/org.router");
const ticket_router_1 = require("./routers/ticket.router");
const order_router_1 = require("./routers/order.router");
const review_router_1 = require("./routers/review.router");
// import { UserController } from "./controllers/user.controller";
const PORT = 8000;
const app = (0, express_1.default)();
exports.upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Middleware untuk log setiap request yang diterima
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`); // Log method dan URL request
//   next();
// });
console.log("CORS Origin:", process.env.BASE_URL_FE);
app.get("/api", (req, res) => {
    res.status(200).send("Welcome to my API");
});
const eventRouter = new event_router_1.EventRouter();
const ticketRouter = new ticket_router_1.TicketRouter();
const userRouter = new user_router_1.UserRouter();
const authRouter = new auth_router_1.AuthRouter();
const orgAuthRouter = new org_router_1.OrgAuthRouter();
const orderRouter = new order_router_1.OrderRouter();
const reviewRouter = new review_router_1.ReviewRouter();
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
