import express from 'express';
import userController from './user.controller';

const userRouter = express.Router();

// creating user in db:
userRouter.post('/create-user', userController.creatUser);

// read all users:
userRouter.get('/', userController.getAllUser);

// read a user:
userRouter.get('/:id', userController.getAUser);

// update a user:
userRouter.patch('/:id', userController.updateAUser);

export default userRouter;
