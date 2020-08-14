import { IUser } from '../interfaces/user';
import { IUserModel } from '../models/user';

export type addUserParams = Pick<IUser, 'name' | 'email' | 'password'>;

export interface UserRepositoryInterface {
  saveUser(params: addUserParams): Promise<IUserModel>;
  findByEmail(email: string): Promise<IUserModel>;
  getAll(): Promise<IUserModel[]>;
}
