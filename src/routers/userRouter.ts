import express from 'express';
import usersController from '../controllers/usersController';

export const routerUser = express.Router();

routerUser.get('/', usersController.getAllUsers)