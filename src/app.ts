import express from 'express';
import cors from 'cors';
import { routerUser } from './routers/userRouter';
import { routerProduct } from './routers/produtoRouter';
import { routerPage } from './routers/pageRouter';
import path from 'path';

export const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '/statics')));
app.use('/index', routerPage)

app.use('/users', routerUser)
app.use('/products', routerProduct)
