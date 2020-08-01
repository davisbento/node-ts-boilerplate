import { Router } from 'express';

import { register, login } from '../controllers/auth';
import { index } from '../controllers/home';
import { findUserById, indexUsers } from '../controllers/user';

const routes = Router();

routes.get('/api/', index);

routes.get('/api/user', indexUsers);
routes.get('/api/user/:id', findUserById);

routes.post('/api/auth/register', register);
routes.post('/api/auth/login', login);

export default routes;
