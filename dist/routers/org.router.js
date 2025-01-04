"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgAuthRouter = void 0;
const express_1 = require("express");
const org_controller_1 = require("../controllers/org.controller");
class OrgAuthRouter {
    constructor() {
        this.organizerController = new org_controller_1.OrganizerController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/organizer/register", this.organizerController.registerOrg);
        this.router.post("/organizer/login", this.organizerController.loginOrg);
        this.router.patch("/verify/:token", this.organizerController.verifyOrg);
    }
    getRouter() {
        return this.router;
    }
}
exports.OrgAuthRouter = OrgAuthRouter;
