import { Router } from "express";
import { UserController } from "../controllers/user.controller";
<<<<<<< HEAD
import { verifyToken, checkAdmin } from "../middleware/verify";
=======
import { verifyToken, checkAdmin} from "../middleware/verify";
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
import { uploader } from "../services/uploader";

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

<<<<<<< HEAD
  
  private initializeRoutes() {
    this.router.get("/", verifyToken, checkAdmin, this.userController.getUsers);
    this.router.get("/profile", verifyToken, this.userController.getUserId);
    this.router.post("/auth");
=======
  private initializeRoutes() {
    this.router.get("/", verifyToken, checkAdmin, this.userController.getUsers);
    this.router.get("/profile", verifyToken, this.userController.getUserId);
    this.router.post("/", this.userController.createUser);
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
    this.router.patch(
      "/avatar",
      verifyToken,
      uploader("diskStorage", "avatar-", "/avatar").single("file"),
<<<<<<< HEAD
      this.userController.editAvatar,
=======
      this.userController.editAvatar
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
    );
    this.router.patch(
      "/avatar-cloud",
      verifyToken,
      uploader("memoryStorage", "avatar").single("file"),
<<<<<<< HEAD
      this.userController.editAvatarCloud,
=======
      this.userController.editAvatarCloud
>>>>>>> 9823d3efad9c5ef8788719155c1e725e9976f841
    );

    this.router.patch("/:id", this.userController.editUser);
    this.router.delete("/:id", this.userController.deleteUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
