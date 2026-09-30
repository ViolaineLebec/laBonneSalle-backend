import type { Request, NextFunction, Response } from "express";
import reservationService from "../services/reservation.service.ts";

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reservation = await reservationService.getById(Number(req.params.id));
        res.status(200).json(reservation);
    } catch (error) {
        next(error);
    }
};

const getAll = async (req: Request, res: Response) => {
    try {
        const reservations = await reservationService.getAll();
        return res.status(200).json(reservations);
    } catch (error) {
        return res.status(500).send();
    }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const reservation = {
            roomId: Number(data.roomId),
            date_debut: data.date_debut,
            date_fin: data.date_fin,
            userId: Number(data.userId)
        };

        const newReservation = await reservationService.create(reservation);
        res.status(201).json(newReservation);
    } catch (error) {
        next(error);
    }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedReservation = await reservationService.update(Number(req.params.id), req.body);
        res.status(200).json(updatedReservation);
    } catch (error) {
        next(error);
    }
};

const suppr = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reservation = await reservationService.suppr(Number(req.params.id));
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

export default {
    getById,
    getAll,
    create,
    update,
    suppr
};