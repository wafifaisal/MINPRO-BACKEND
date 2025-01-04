"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgAuthRouter = void 0;
const express_1 = require("express");
const org_auth_controller_1 = require("../controllers/org.auth.controller");
class OrgAuthRouter {
    constructor() {
        this.orgAuthController = new org_auth_controller_1.OrgAuthController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/organizer", this.orgAuthController.registerOrg);
        this.router.post("/organizer/login", this.orgAuthController.loginOrg);
        this.router.patch("/verify/:token", this.orgAuthController.verifyOrg);
    }
    getRouter() {
        return this.router;
    }
}
exports.OrgAuthRouter = OrgAuthRouter;
