import roomService from "../services/room.service.ts";
import { z } from 'zod';

export const roomSchema = z.object({
    name: z
        .string({ message: 'Le nom est obligatoire.' })
        .min(5, { message: 'Le nom doit contenir au moins 5 caractères.' }),

    capacity: z
        .number({ message: 'La capacité doit être un nombre.' })
        .int({ message: 'La capacité doit être un nombre entier.' })
        .positive({ message: 'La capacité doit être supérieure à 0' })
});

// Middleware Express
export const validate = (schema) =>
    (req, res, next) => {
        // safeParse évite de devoir gérer un try/catch manuel
        const result = schema.safeParse(req.body);
        if (!result.success) {
            // On extrait les messages d'erreur proprement
            const errors = result.error.issues.map((issue) => ({
                field: issue.path[0],
                message: issue.message
            }));

            return res.status(400).json({
                status: 'error',
                message: 'Données invalides',
                errors
            });
        }

        // On remplace req.body par les données nettoyées/validées
        req.body = result.data;
        next();
    };

// const checkExists = async (req, res, next) => {
//     const room = await roomService.getById(req.params.id);
//     if (!room) {
//         return res.status(404).json({
//             message:
//                 "Room not found",
//         });
//     }
//     req.room = room;
//     next();
// };

// const validateData = async (req, res, next) => {
//     const rooms = await roomService.getAll(req.body);

// }

export default {
    // checkExists
};