import { IUserRepository } from '../interfaces/IUserRepository';
import { IUserService } from '../interfaces/IUserService';
import AppError from '../lib/errors';
import { User } from '../models/user.model';

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUsers(): Promise<User[]> {
    const user = await this.userRepository.findAll();

    if (!user) {
      throw new AppError('No users found', 404);
    }

    return user;
  }

  async getUser(id: string): Promise<User | undefined> {
    const user = await this.userRepository.findOneById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }

  async createUser(email: string, password: string): Promise<User> {
    if (!email || !password) {
      throw new AppError('Email and password are required', 400);
    }

    const userExists = await this.userRepository.findOneByEmail(email);

    if (userExists) {
      throw new AppError('User already exists', 400);
    }

    const newUser = await this.userRepository.create({ email, password });

    if (!newUser) {
      throw new AppError('User not created', 500);
    }

    return newUser;
  }

  async updateUser(id: string, user: User): Promise<User> {
    const userExists = await this.userRepository.findOneById(id);

    if (!userExists) {
      throw new AppError('User not found', 404);
    }

    const updatedUser = await this.userRepository.update(id, user);

    if (!updatedUser) {
      throw new AppError('User not updated', 500);
    }

    return updatedUser;
  }

  async deleteUser(id: string): Promise<User> {
    const deletedUser = await this.userRepository.delete(id);

    if (!deletedUser) {
      throw new AppError('User not deleted', 500);
    }

    return deletedUser;
  }
}
