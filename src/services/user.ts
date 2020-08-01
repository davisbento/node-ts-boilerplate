import { IUser } from '../interfaces/user';
import { hashPass, comparePass } from '../helpers/bcryptHelper';
import { findByEmail, saveUser } from '../repository/user';
import HttpException from '../exceptions/HttpException';
import { generateToken } from '../helpers/jwtHelper';

type addUserParams = Pick<IUser, 'name' | 'email' | 'password'>;
type loginUserParams = Pick<IUser, 'email' | 'password'>;

export const addUser = async (params: addUserParams) => {
  const userByEmail = await findByEmail(params.email);

  if (userByEmail) {
    throw new HttpException(409, 'E-mail already taken');
  }

  const hashedPassword = await hashPass(params.password);

  const response = await saveUser({ ...params, password: hashedPassword });

  return response;
};

export const loginUser = async (params: loginUserParams) => {
  const user = await findByEmail(params.email);

  if (!user) {
    throw new HttpException(404, 'User not found');
  }

  const comparePassword = await comparePass(params.password, user.password);

  if (!comparePassword) {
    throw new HttpException(400, 'Password doesnt match');
  }
  return generateToken(user);
};
