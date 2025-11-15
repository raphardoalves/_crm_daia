import produtoModel from "../models/produtoModel";
import type {Request, Response} from 'express';

const getChosenProduct = async (req: Request, res: Response) => {
    const {nome, fornecedor, idCliente} = req.body
    const lista = await produtoModel.getChosenProduct(nome, fornecedor, idCliente)
    return res.status(200).json(lista)
}

export default {
    getChosenProduct
}