import express from 'express';
import produtoController from '../controllers/produtoController';

export const routerProduct = express.Router()

routerProduct.post('/', produtoController.getChosenProduct)
