import { NextFunction, Request, Response } from 'express';

export const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({
      message: 'home'
    });
  } catch (err) {
    next(err);
  }
};
