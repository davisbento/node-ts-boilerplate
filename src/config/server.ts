import * as express from 'express';
import * as morgan from 'morgan';
import allowCors from './cors';
import 'dotenv/config';
import { errorHandling } from '../middleware/error';

import routes from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
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
}

export default new App().app;
