import { NextFunction, Request, Response } from 'express';
import { IUserService } from '../interfaces/user.service.interface';

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

  // ...
}
