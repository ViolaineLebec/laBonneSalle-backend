import express from "express";
import roomController from "../controllers/room.controller.ts";
import { roomSchema, validate } from "../middlewares/room.middleware.ts";

const roomRouter = express.Router();

roomRouter.get("/", roomController.getAll);
roomRouter.get("/:id", roomController.getById);
roomRouter.post("/", validate(roomSchema), roomController.create);
// roomRouter.patch("/:id", roomController.update);
roomRouter.delete("/:id", roomController.suppr);
roomRouter.put("/:id", validate(roomSchema), roomController.update);

export default roomRouter;