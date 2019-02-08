import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import allowCors from './cors';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(allowCors);
  }
}

export default new App().app;
