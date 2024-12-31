import express from 'express';
import userController from './user.controller';

const userRouter = express.Router();

// creating user in db:
userRouter.post('/create-user', userController.creatUser);

// read all users:
userRouter.get('/', userController.getAllUser);

// update a user:
userRouter.patch('/:id', userController.updateAUser);

export default userRouter;
