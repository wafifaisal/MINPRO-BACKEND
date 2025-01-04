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
    this.router.get("/:id", this.orderController.getOrderId);
    this.router.post("/", this.orderController.createTransaction);
<<<<<<< HEAD
=======
    this.router.post("/midtrans-webhook", this.orderController.midtransWebHook);
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
    this.router.post("/payment", this.orderController.getSnapToken);
  }

  getRouter(): Router {
    return this.router;
  }
}
