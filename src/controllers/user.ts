import { NextFunction, Request, Response } from 'express';

import { IUserModel, User } from '../models/user';
import { formatError } from './../helpers/formatError';

class UserController {
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const user: Array<IUserModel> = await User.find();

      if (user.length === 0) {
        return res.status(404).json({ success: true, data: [] });
      }

      return res.status(200).json({ success: true, data: user });
    } catch (err) {
      const errors = formatError(err);
      return res.status(500).json({ sucess: false, errors });
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const user: IUserModel = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({ success: true, data: {} });
      }

      return res.status(200).json({ success: true, data: user });
    } catch (err) {
      const errors = formatError(err);
      return res.status(500).json({ sucess: false, errors });
    }
  }
}

export default new UserController();
