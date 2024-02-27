import { User } from '../entities/user.entity';
import { IUserRepository } from '../interfaces/user.repository.interface';
import { IUserService } from '../interfaces/user.service.interface';
import { NotFoundError } from '../lib/errors';

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUsers(): Promise<User[]> {
    const user = await this.userRepository.findAll();

    if (!user) {
      throw new NotFoundError('User not found');
    }

    return user;
  }

  // ...
}
