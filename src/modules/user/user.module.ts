import { Router } from 'express';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { User } from './models/user';

export default (router: Router): void => {
  const userRepository = new UserRepository(User);
  const userService = new UserService(userRepository);
  const userControler = new UserController(userService);

  router.get('/signup', (req, res) => userControler.getAll(req, res));
};
