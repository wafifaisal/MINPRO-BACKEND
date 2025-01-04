import { Router } from "express";
import { OrgAuthController } from "../controllers/org.controller";

export class OrgAuthRouter {
  private orgAuthController: OrgAuthController;
  private router: Router;

  constructor() {
    this.orgAuthController = new OrgAuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/organizer", this.orgAuthController.registerOrg);
    this.router.post("/organizer/login", this.orgAuthController.loginOrg);

    this.router.patch("/verify/:token", this.orgAuthController.verifyOrg);
  }

  getRouter(): Router {
    return this.router;
  }
}
