import { Router } from "express";
import { ReviewController } from "../controllers/review.controller";

export class ReviewRouter {
  private router: Router;
  private reviewController: ReviewController;

  constructor() {
    this.router = Router();
    this.reviewController = new ReviewController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/:id", this.reviewController.createReview);
    this.router.get("/:id", this.reviewController.getReviews);
  }

  getRouter(): Router {
    return this.router;
  }
}
