import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { router } from './routes';

import { handleErrors } from './middlewares/handleErrors';
import './database';

const app = express();

app.use(express.json());

app.use(router);

app.use(handleErrors);

app.listen(3000, () => {
  console.log('server is running');
});
