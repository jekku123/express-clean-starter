import { User } from '../entities/user.entity';

export interface IUserService {
  getUsers(): Promise<User[]>;
}
