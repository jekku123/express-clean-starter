import { IUserRepository } from '../interfaces/IUserRepository';
import { User } from '../models/user.model';

export class UserRepository implements IUserRepository {
  private users: User[] = [
    { id: '1', email: 'john@doe.com', password: 'password' },
    { id: '2', email: 'jane@doe.com', password: 'password' },
  ];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findOneById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async update(id: string, user: User): Promise<User> {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = user;
    return user;
  }

  async delete(id: string): Promise<User> {
    const index = this.users.findIndex((user) => user.id === id);
    const user = this.users[index];
    this.users.splice(index, 1);
    return user;
  }
}
