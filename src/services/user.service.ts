import userRepository from "../repositories/user.repository.ts";

const getById = async (id: number) => {
    const user = await userRepository.getById(id);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

const getAll = async () => {
    return await userRepository.getAll();
};

const create = async (user: { lastname: string, firstname: string, email: string, password: string }) => {

    return await userRepository.create(user);
}

const update = async (id: number, data: { lastname: string, firstname: string, email: string, password: string }) => {
    return await userRepository.update(id, data);
}

const suppr = async (id: number) => {
    return await userRepository.suppr(id);
}

export default {
    getById,
    getAll,
    create,
    update,
    suppr
};
