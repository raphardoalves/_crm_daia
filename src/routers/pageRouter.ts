import express from "express";
import { pageServer } from "../controllers/serverPage";

export const routerPage = express.Router()

routerPage.get('/index', pageServer)