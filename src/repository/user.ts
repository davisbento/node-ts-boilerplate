import { IUser } from '../interfaces/user';
import { User } from '../models/user';

type addUserParams = Pick<IUser, 'name' | 'email' | 'password'>;

export const saveUser = async (params: addUserParams) => {
  const user = new User({ ...params });

  const response = await user.save();

  return response;
};

export const findByEmail = (email: string) => {
  return User.findOne({
    email
  });
};
