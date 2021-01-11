import { IUser } from '../interfaces/user';
import { IUserModel } from '@/global/db/models/user';

export type addUserParams = Pick<IUser, 'name' | 'email' | 'password'>;

export interface IUserRepository {
  saveUser(params: addUserParams): Promise<IUserModel>;
  findByEmail(email: string): Promise<IUserModel>;
  getAll(): Promise<IUserModel[]>;
}
