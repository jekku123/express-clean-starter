import express from 'express';
import { UserController } from '../controllers/user.controller';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from '../services/user.service';

const router = express.Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get('/', userController.onGetUsers.bind(userController));

export default router;
