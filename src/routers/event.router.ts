import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { upload } from "..";

export class EventRouter {
  private eventController: EventController;
  private router: Router;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get("/", this.eventController.getEvent);

    this.router.post(
      "/",
      upload.single("event_thumbnail"),
      this.eventController.createEvent
    );
    this.router.get("/:id", this.eventController.getEventbyID);
  }

  getRouter(): Router {
    return this.router;
  }
}
