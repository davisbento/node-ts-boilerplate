import { Router } from 'express';
import HomeController from '../controllers/home';
import UserController from '../controllers/user';
import AuthController from '../controllers/auth';

const routes = Router();

routes.get('/api/', HomeController.index);

routes.get('/api/user', UserController.index);
routes.get('/api/user/:id', UserController.findById);

routes.post('/auth/register', AuthController.register);

export default routes;
