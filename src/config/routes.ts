import { Express, Router } from 'express';
import userModule from '../modules/user/user.module';

export default (app: Express): void => {
  const router = Router();
  app.use('/api/users', () => userModule(router));
};
