import userModels from "../models/userModels"
import type { Request, Response } from "express"

const getAllUsers = async (req: Request, res: Response) => {
    const lista = await userModels.getAllUsers()
    return res.status(200).json(lista)
}

export default {
    getAllUsers
}