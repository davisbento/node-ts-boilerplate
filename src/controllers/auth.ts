import * as bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

import { formatError } from '../helpers/formatError';
import { IUserModel, User } from '../models/user';

export const register = async (req: Request, res: Response) => {
  try {
    const findUser: Array<IUserModel> = await User.find({
      email: req.body.email
    });

    if (findUser.length > 0) {
      return res.status(409).json({ error: { message: 'E-mail already taken' } });
    }
    const data = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    };

    const user = new User();
    const hashedPassword = await bcrypt.hash(data.password, 10);
    user.password = hashedPassword;
    user.email = data.email;
    user.name = data.name;

    const response = await user.save();

    return res.status(200).json({ data: response });
  } catch (err) {
    const errors = formatError(err);
    return res.status(500).json({ errors });
  }
};
