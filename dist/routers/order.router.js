"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
class OrderRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.orderController = new order_controller_1.OrderController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", this.orderController.createTransaction);
        this.router.post("/midtrans-webhook", this.orderController.midtransWebHook);
        this.router.post("/payment", this.orderController.getSnapToken);
        this.router.get("/:id", this.orderController.getOrderId);
    }
    getRouter() {
        return this.router;
    }
}
exports.OrderRouter = OrderRouter;
