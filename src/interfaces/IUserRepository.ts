import { User } from '../models/user.model';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findOneById: (id: string) => Promise<User | undefined>;
  findOneByEmail: (email: string) => Promise<User | undefined>;
  create: (user: User) => Promise<User>;
  update: (id: string, user: User) => Promise<User>;
  delete: (id: string) => Promise<User>;
}
