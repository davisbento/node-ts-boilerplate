import { NextFunction, Request, Response } from 'express';

class HomeController {
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({
        message: 'home',
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new HomeController();
