"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRouter = void 0;
const express_1 = require("express");
const review_controller_1 = require("../controllers/review.controller");
class ReviewRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.reviewController = new review_controller_1.ReviewController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/:id", this.reviewController.createReview);
        this.router.get("/:id", this.reviewController.getReviews);
    }
    getRouter() {
        return this.router;
    }
}
exports.ReviewRouter = ReviewRouter;
