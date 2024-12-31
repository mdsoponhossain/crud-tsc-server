// create user controller:

import { Request, Response } from 'express';
import { userModel } from './user.model';

// post a user:
const creatUser = async (req: Request, res: Response) => {
  try {
    const result = await new userModel(req.body).save();
    res.status(200).json({
      success: true,
      message: 'All document retrieved successfully.',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: false,
      message: 'Something wrong!',
      error: (error as { message: string }).message,
    });
  }
};

// get all users:

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userModel.find();
    res.status(200).json({
      success: true,
      message: 'All user retrieved successfully.',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: true,
      message: 'All user retrieved successfully.',
      data: (error as { message: string }).message,
    });
  }
};

// update a user:

const updateAUser = async (req: Request, res: Response) => {
  try {
    const updateDoc = req.body;
    const result = await userModel.updateOne(
      { _id: req.params.id },
      { ...updateDoc },
    );

    res.status(200).json({
      success: true,
      message: 'The user updated successfully.',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      success: true,
      message: 'The user updated successfully.',
      error: (error as { message: string }).message,
    });
  }
};

const userController = {
  creatUser,
  getAllUser,
  updateAUser,
};

export default userController;
