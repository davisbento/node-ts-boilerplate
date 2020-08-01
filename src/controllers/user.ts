import { Request, Response } from 'express';

import { IUserModel, User } from '../models/user';
import { formatError } from './../helpers/formatError';

export const indexUsers = async (req: Request, res: Response) => {
  try {
    const user: Array<IUserModel> = await User.find();

    if (user.length === 0) {
      return res.status(404).json({ data: [] });
    }

    return res.status(200).json({ data: user });
  } catch (err) {
    const errors = formatError(err);
    return res.status(500).json({ errors });
  }
};

export const findUserById = async (req: Request, res: Response) => {
  try {
    const user: IUserModel = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ data: {} });
    }

    return res.status(200).json({ data: user });
  } catch (err) {
    const errors = formatError(err);
    return res.status(500).json({ errors });
  }
};
