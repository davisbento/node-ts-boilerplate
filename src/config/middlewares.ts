import cors from 'cors';
import morgan from 'morgan';
import { Express } from 'express';
import express from 'express';

export default (app: Express): void => {
  app.use(express.json());
  app.use(cors());
  app.use(morgan('combined'));
};
