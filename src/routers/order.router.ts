import { Router } from "express";
import { OrderController } from "../controllers/order.controller";

export class OrderRouter {
  private router: Router;
  private orderController: OrderController;

  constructor() {
    this.router = Router();
    this.orderController = new OrderController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", this.orderController.createTransaction);
    this.router.post("/midtrans-webhook", this.orderController.midtransWebHook);
    this.router.post("/payment", this.orderController.getSnapToken);
    this.router.get("/:id", this.orderController.getOrderId);
  }

  getRouter(): Router {
    return this.router;
  }
}
