import 'dotenv/config';

import * as express from 'express';
import * as morgan from 'morgan';

import { errorHandling } from '../middleware/error';
import allowCors from './cors';
import db from './db';
import routes from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.database();
    this.routes();
    this.errorMiddleware();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(allowCors);
    this.app.use(morgan('combined'));
  }

  private errorMiddleware(): void {
    this.app.use(errorHandling);
  }

  private routes(): void {
    this.app.use(routes);
  }

  private database(): void {
    db();
  }
}

export default new App().app;
