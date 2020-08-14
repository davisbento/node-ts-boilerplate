import { User, IUserModel } from './models/user';
import { UserRepositoryInterface, addUserParams } from './interfaces/user-repository';

export class UserRepository implements UserRepositoryInterface {
  constructor(private readonly userModel: typeof User) {}

  public async getAll(): Promise<IUserModel[]> {
    return this.userModel.find({});
  }

  public async saveUser(params: addUserParams): Promise<IUserModel> {
    const user = new User({ ...params });

    const response = await user.save();

    return response;
  }

  public async findByEmail(email: string): Promise<IUserModel> {
    return this.userModel.findOne({
      email
    });
  }
}
