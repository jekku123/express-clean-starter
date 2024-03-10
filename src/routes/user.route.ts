import express from 'express';
import { UserController } from '../controllers/user.controller';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from '../services/user.service';

const router = express.Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get('/', userController.onGetUsers.bind(userController));
router.get('/:id', userController.onGetUser.bind(userController));
router.post('/', userController.onCreateUser.bind(userController));
router.put('/:id', userController.onUpdateUser.bind(userController));
router.delete('/:id', userController.onDeleteUser.bind(userController));

export default router;
