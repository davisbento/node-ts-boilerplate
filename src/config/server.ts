import 'dotenv/config';
import express from 'express';

import mongoose from 'mongoose';

import setupRoutes from './routes';
import setupMiddlewares from './middlewares';

import { createConnection } from './db';
const PORT = process.env.PORT || 8080;

const app = express();

export const createServer = async () => {
  await createConnection();

  setupRoutes(app);
  setupMiddlewares(app);

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
