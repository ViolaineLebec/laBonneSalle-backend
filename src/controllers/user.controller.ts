import type { Request, NextFunction, Response } from "express";
import userService from "../services/user.service.ts";

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.getById(Number(req.params.id));
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const getAll = async (req: Request, res: Response) => {
    try {
        const rooms = await userService.getAll();
        return res.status(200).json(rooms);
    } catch (error) {
        return res.status(500).send();
    }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const user = {
            name: data.name,
            //  capacity: Number(data.capacity) 
        };

        const newUser = await userService.create(user);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedUser = await userService.update(Number(req.params.id), req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

const suppr = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.suppr(Number(req.params.id));
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