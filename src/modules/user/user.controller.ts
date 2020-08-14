import { Request, Response } from 'express';

import { UserService } from './user.service';

export class UserController {
  constructor(private userService: UserService) {}

  public async getAll(req: Request, res: Response) {
    const data = this.userService.getAllUsers();
    res.json(data).status(200);
  }
}
