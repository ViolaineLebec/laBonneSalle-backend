import { prisma } from "../../database/database.ts";
import { Prisma } from "../../generated/prisma/client.ts";
import type { createUserDTO, userDTO } from "../dto/user.dto.ts";

const getById = async (id: number) => {
    return await prisma.user.findUnique({
        where: { id }
    });
};

const getAll = async () => {
    return await prisma.user.findMany();
};

const create = async (data: { lastname: string, firstname: string, email: string, password: string }) => {
    return await prisma.user.create({ data });
};

const update = async (id: number, data: { lastname: string, firstname: string, email: string, password: string }): Promise<userDTO> => {
    return await prisma.user.update({
        where: { id },
        data: { ...data }
    });
};

const suppr = async (id: number) => {
    return await prisma.user.delete({ where: { id } });
};

export default {
    getById,
    getAll,
    create,
    update,
    suppr
};