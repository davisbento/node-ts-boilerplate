import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as morgan from 'morgan';
import allowCors from './cors';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.set('view engine', 'njk');
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(allowCors);
    this.app.use(express.static(path.join(__dirname, '../app/public')));
  }
}

export default new App().app;