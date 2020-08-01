import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import { errorHandling } from '../middleware/error';
import routes from './routes';

import { createConnection } from './db';
const PORT = process.env.PORT || 8080;

const app = express();

export const createServer = async () => {
  await createConnection();

  app.use(express.json());
  app.use(cors());
  app.use(morgan('combined'));
  app.use(routes);
  app.use(errorHandling);

  const server = app.listen(PORT, () => {
    console.log('BACKEND RUNNING ON PORT', PORT);
  });

  process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
      console.log('Http server closed.');
      // boolean means [force], see in mongoose doc
      mongoose.connection.close(false, () => {
        console.log('MongoDb connection closed.');
        process.exit(0);
      });
    });
  });
};
