import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { verifyToken } from "../middleware/verify";
import { upload } from "..";

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", verifyToken, this.userController.getUsers);
    this.router.get("/:id", verifyToken, this.userController.getUserId);
    this.router.post("/auth");

    this.router.patch(
      "/avatar",
      verifyToken,
      upload.single("avatar"),

      this.userController.editAvatar
    );
    this.router.patch(
      "/avatar-cloud",
      verifyToken,
      upload.single("avatar"),

      this.userController.editAvatarCloud
    );

    this.router.patch("/:id", verifyToken, this.userController.editUser);
    this.router.delete("/:id", verifyToken, this.userController.deleteUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
