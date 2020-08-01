import { Request, Response } from 'express';

import { addUser, loginUser } from '../services/user';

export const register = async (req: Request, res: Response, next: any) => {
  try {
    const data = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    };

    const response = await addUser(data);

    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response, next: any) => {
  try {
    const data = {
      email: req.body.email,
      password: req.body.password
    };

    const response = await loginUser(data);

    return res.status(200).json({ token: response });
  } catch (err) {
    next(err);
  }
};
