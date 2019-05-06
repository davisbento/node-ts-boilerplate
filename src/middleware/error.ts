import { Request, Response, NextFunction } from 'express';
import HttpException from 'exceptions/HttpException';

export const errorHandling = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err.status) err.status = 500;
  return res.status(err.status).json({ error: err.message });
};
