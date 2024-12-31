// create user controller:
import { ObjectId } from 'mongodb';
import { Request, Response } from 'express';
import { userModel } from './user.model';
import { userValidationSchema } from './user.joi.validation';

// post a user:
const creatUser = async (req: Request, res: Response) => {
  try {
    const { error, value } = userValidationSchema.validate(req.body);
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something wrong!',
        error: (error as { message: string }).message,
      });
      return;
    }

    const result = await new userModel(value).save();

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

// get a user:

const getAUser = async (req: Request, res: Response) => {
  try {
    const result = await userModel.findOne({
      _id: new ObjectId(req.params.id),
    });
    res.status(200).json({
      success: true,
      message: 'A user data is retrieved successfully.',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      message: 'A user data failed to load.',
      error: (error as { message: string }).message,
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
  getAllUser,
  getAUser,
  creatUser,
  updateAUser,
};

export default userController;
