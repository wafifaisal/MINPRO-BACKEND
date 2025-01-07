"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileRouter = void 0;
const express_1 = require("express");
const userProfile_controller_1 = require("../controllers/userProfile.controller");
// import { verifyToken } from "../middlewares/verify";
class UserProfileRouter {
    constructor() {
        this.userController = new userProfile_controller_1.UserProfileController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.userController.getUsers);
        this.router.get("/profile", this.userController.getUserId);
        this.router.get("/events", this.userController.getEventsUser);
        this.router.get("/coupon", this.userController.getUserCoupon);
        this.router.get("/points", this.userController.getPointsUser);
        this.router.get("/tickets/:id", this.userController.getTicketsUser);
        this.router.get("/amount/tickets/:id", this.userController.getAmountTicketsUser);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserProfileRouter = UserProfileRouter;
