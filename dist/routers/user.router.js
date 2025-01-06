"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const verify_1 = require("../middleware/verify");
const __1 = require("..");
class UserRouter {
    constructor() {
        this.userController = new user_controller_1.UserController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", verify_1.verifyToken, this.userController.getUsers);
        this.router.get("/:id", verify_1.verifyToken, this.userController.getUserId);
        this.router.post("/auth");
        this.router.patch("/avatar", verify_1.verifyToken, __1.upload.single("avatar"), this.userController.editAvatar);
        this.router.patch("/avatar-cloud", verify_1.verifyToken, __1.upload.single("avatar"), this.userController.editAvatarCloud);
        this.router.patch("/:id", verify_1.verifyToken, this.userController.editUser);
        this.router.delete("/:id", verify_1.verifyToken, this.userController.deleteUser);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
