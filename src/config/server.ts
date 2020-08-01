import 'dotenv/config';

import express from 'express';
import morgan from 'morgan';

import { errorHandling } from '../middleware/error';
import allowCors from './cors';
import routes from './routes';

// import { createConnection } from './db';
const PORT = process.env.PORT || 8080;

const app = express();

export const createServer = async () => {
  // await createConnection();

  app.use(express.json());
  app.use(allowCors);
  app.use(morgan('combined'));
  app.use(routes);
  app.use(errorHandling);

  app.listen(PORT, () => {
    console.log('BACKEND RUNNING ON PORT', PORT);
  });
};
