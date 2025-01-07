import { Router } from "express";
import { UserProfileController } from "../controllers/userProfile.controller";
// import { verifyToken } from "../middlewares/verify";

export class UserProfileRouter {
  private userController: UserProfileController;
  private router: Router;

  constructor() {
    this.userController = new UserProfileController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.userController.getUsers);
    this.router.get("/profile", this.userController.getUserId);
    this.router.get("/events", this.userController.getEventsUser);
    this.router.get("/coupon", this.userController.getUserCoupon);
    this.router.get(
      "/points",

      this.userController.getPointsUser
    );

    this.router.get("/tickets/:id", this.userController.getTicketsUser);
    this.router.get(
      "/amount/tickets/:id",
      this.userController.getAmountTicketsUser
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
