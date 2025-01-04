"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const event_router_1 = require("./routers/event.router");
const user_router_1 = require("./routers/user.router");
const auth_router_1 = require("./routers/auth.router");
const multer_1 = __importDefault(require("multer"));
const org_auth_router_1 = require("./routers/org.auth.router");
const ticket_router_1 = require("./routers/ticket.router");
const order_router_1 = require("./routers/order.router");
const PORT = 8000;
const app = (0, express_1.default)();
exports.upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.BASE_URL_FE,
    credentials: true,
}));
app.get("/api", (req, res) => {
    res.status(200).send("Welcome to my API");
});
const eventRouter = new event_router_1.EventRouter();
const ticketRouter = new ticket_router_1.TicketRouter();
const userRouter = new user_router_1.UserRouter();
const authRouter = new auth_router_1.AuthRouter();
const orgAuthRouter = new org_auth_router_1.OrgAuthRouter();
const orderRouter = new order_router_1.OrderRouter();
app.use("/api/events", eventRouter.getRouter());
app.use("/api/tickets", ticketRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/auth", authRouter.getRouter());
app.use("/api/organizer", orgAuthRouter.getRouter());
app.use("/api/order", orderRouter.getRouter());
console.log(process.env.JWT_KEY);
app.listen(PORT, () => {
    console.log(`server running on -> http://localhost:${PORT}/api`);
});
