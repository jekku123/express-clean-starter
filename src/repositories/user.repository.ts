import { IUserRepository } from '../interfaces/IUserRepository';
import { User } from '../models/user.model';

export class UserRepository implements IUserRepository {
  private users: User[] = [
    { id: 1, email: 'john@doe.com', password: 'password' },
    { id: 2, email: 'jane@doe.com', password: 'password' },
  ];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findOneById(id: number): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  async create(user: User): Promise<User> {
    const latestId = this.users[this.users.length - 1].id;
    const newUser = { ...user, id: (latestId || 0) + 1 };
    this.users.push(newUser);
    return newUser;
  }

  async update(id: number, user: User): Promise<User> {
    const index = this.users.findIndex((user) => user.id === id);
    const newUser = { ...user, id };
    this.users[index] = newUser;
    return newUser;
  }

  async delete(id: number): Promise<User> {
    const index = this.users.findIndex((user) => user.id === id);
    const user = this.users[index];
    this.users.splice(index, 1);
    return user;
  }
}
