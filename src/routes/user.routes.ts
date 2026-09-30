import express from "express";
import userController from "../controllers/user.controller.ts";

const userRouter = express.Router();

userRouter.get("/", userController.getAll);
userRouter.get("/:id", userController.getById);
userRouter.post("/", userController.create);
userRouter.patch("/:id", userController.update);
userRouter.delete("/:id", userController.suppr);

export default userRouter;