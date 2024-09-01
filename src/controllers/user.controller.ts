import { NextFunction, Request, Response } from 'express';
import { IUserService } from '../interfaces/IUserService';

export class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  async onGetUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.getUsers();
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

  async onGetUser(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const user = await this.userService.getUser(+id);
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

  async onCreateUser(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    try {
      const user = await this.userService.createUser(email, password);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }

  async onUpdateUser(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const user = await this.userService.updateUser(+id, req.body);
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

  async onDeleteUser(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const user = await this.userService.deleteUser(+id);
      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }
}
