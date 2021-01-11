import jwt from 'jsonwebtoken';
import { IUserModel } from '@/global/db/models/user';

const secret = process.env.SECRET_KEY || 'IMBATMAN';

export const generateToken = (user: IUserModel) => {
  const payload = {
    id: user._id
  };

  const token = jwt.sign(payload, secret);

  return token;
};
