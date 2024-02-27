import { User } from '../entities/user.entity';
import { IUserRepository } from '../interfaces/user.repository.interface';

export class UserRepository implements IUserRepository {
  private users = [
    { id: '1', name: 'John Doe', email: 'john@doe.com', password: 'password' },
    { id: '2', name: 'Jane Doe', email: 'jane@doe.com', password: 'password' },
  ];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  // ...
}
