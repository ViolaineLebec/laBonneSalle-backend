import express from "express";
import reservationController from "../controllers/reservation.controller.ts";

const reservationRouter = express.Router();

reservationRouter.get("/", reservationController.getAll);
reservationRouter.get("/:id", reservationController.getById);
reservationRouter.post("/", reservationController.create);
reservationRouter.patch("/:id", reservationController.update);
reservationRouter.delete("/:id", reservationController.suppr);

export default reservationRouter;