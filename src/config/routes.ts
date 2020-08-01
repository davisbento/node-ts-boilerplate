import { Router } from 'express';

import { register } from '../controllers/auth';
import { index } from '../controllers/home';
import { findUserById, indexUsers } from '../controllers/user';

const routes = Router();

routes.get('/api/', index);

routes.get('/api/user', indexUsers);
routes.get('/api/user/:id', findUserById);

routes.post('/auth/register', register);

export default routes;
