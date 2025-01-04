import { Router } from "express";
import { OrganizerController } from "../controllers/org.controller";

export class OrgAuthRouter {
  private organizerController: OrganizerController;
  private router: Router;

  constructor() {
    this.organizerController = new OrganizerController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/organizer/register", this.organizerController.registerOrg);
    this.router.post("/organizer/login", this.organizerController.loginOrg);

    this.router.patch("/verify/:token", this.organizerController.verifyOrg);
  }

  getRouter(): Router {
    return this.router;
  }
}
