import { IUserRepository } from './interfaces/user-repository';

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  public getAllUsers() {
    return this.userRepository.getAll();
  }
}
