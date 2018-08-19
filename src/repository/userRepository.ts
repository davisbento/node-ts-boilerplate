import { User } from '../models/user';
import { IUser } from '../interfaces/IUser';

export const findByEmail = async (email: string) => {
  const criteria = { email };
  try {
    const user = await User.find(criteria);

    return user;
  }
  catch (err) {
    return err;
  }
};

export const saveUser = async (data: IUser) => {
  const user = new User();
  user.pass = user.generateHash(data.pass);
  user.email = data.email;
  try {
    const newUser = await user.save();

    return newUser;
  }
  catch (err) {
    throw new Error(err.message);
  }
};