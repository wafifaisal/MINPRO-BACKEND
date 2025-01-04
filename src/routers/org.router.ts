import { Router } from "express";
<<<<<<< HEAD
import { OrganizerController } from "../controllers/org.controller";

export class OrgAuthRouter {
  private organizerController: OrganizerController;
  private router: Router;

  constructor() {
    this.organizerController = new OrganizerController();
=======
import { OrgAuthController } from "../controllers/org.controller";

export class OrgAuthRouter {
  private orgAuthController: OrgAuthController;
  private router: Router;

  constructor() {
    this.orgAuthController = new OrgAuthController();
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
<<<<<<< HEAD
    this.router.post("/organizer/register", this.organizerController.registerOrg);
    this.router.post("/organizer/login", this.organizerController.loginOrg);

    this.router.patch("/verify/:token", this.organizerController.verifyOrg);
=======
    this.router.post("/organizer", this.orgAuthController.registerOrg);
    this.router.post("/organizer/login", this.orgAuthController.loginOrg);

    this.router.patch("/verify/:token", this.orgAuthController.verifyOrg);
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
  }

  getRouter(): Router {
    return this.router;
  }
}
