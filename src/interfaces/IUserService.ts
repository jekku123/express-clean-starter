import { User } from '../models/user.model';

export interface IUserService {
  getUsers(): Promise<User[]>;
  getUser(id: number): Promise<User | undefined>;
  createUser(email: string, password: string): Promise<User>;
  updateUser(id: number, user: User): Promise<User>;
  deleteUser(id: number): Promise<User>;
}
