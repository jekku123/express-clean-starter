import { User } from '../models/user.model';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findOneById: (id: number) => Promise<User | undefined>;
  findOneByEmail: (email: string) => Promise<User | undefined>;
  create: (user: User) => Promise<User>;
  update: (id: number, user: User) => Promise<User>;
  delete: (id: number) => Promise<User>;
}
