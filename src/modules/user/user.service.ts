import { UserRepository } from './user.repository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  public getAllUsers() {
    return this.userRepository.getAll();
  }
}
