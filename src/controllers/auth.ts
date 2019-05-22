import * as bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';

import { formatError } from '../helpers/formatError';
import { IUser } from '../interfaces/IUser';
import { User } from '../models/user';

class AuthController {
  public async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user: Array<IUser> = await User.find({ email: req.body.email });

      if (user.length > 0) {
        // http status for 'conflict'
        return res
          .status(409)
          .json({ success: false, error: { message: 'E-mail already taken' } });
      } else {
        const data: IUser = {
          email: req.body.email,
          name: req.body.name,
          password: req.body.password,
        };

        const user = new User();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        user.password = hashedPassword;
        user.email = data.email;
        user.name = data.name;

        const response = await user.save();

        return res.status(200).json({ success: true, data: response });
      }
    } catch (err) {
      const errors = formatError(err);
      return res.status(500).json({ sucess: false, errors });
    }
  }
}

export default new AuthController();
