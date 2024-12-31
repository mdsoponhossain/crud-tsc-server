import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { TUser } from './user.interface';
import configProperty from '../app/config';
import validator from 'validator';

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    validate: {
      validator: (value: string) => /^[a-zA-Z\s]+$/.test(value),
      message: 'Invalid  name string.',
    },
    required: [true, 'Name is required field.'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required field.'],
  },
  profession: {
    type: String,
    required: [true, 'Profession is required field.'],
  },
  address: {
    type: String,
    required: [true, 'Address is required field.'],
  },
  password: {
    type: String,
    required: [true, 'Password is required field.'],
  },
  email: {
    type: String,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: 'Email is not valid.',
    },
    required: [true, 'Email is required field.'],
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: (value: string) => validator.isMobilePhone(value),
      message: 'Enter a valid phone number.',
    },
    required: [true, 'phoneNumber is required field.'],
  },
});

// mongoose middleware:(document middleware)

userSchema.pre('save', async function (next) {
  // console.log(this, 'from mongoose middleware.');
  const user = this as { password: string };
  user.password = await bcrypt.hash(
    this.password,
    Number(configProperty.salt_round),
  );
  next();
});

// post mongoose middleware after creating a user:(document middleware)
userSchema.post('save', async function (user, next) {
  user.password = '';
  next();
});

export const userModel = model<TUser>('User', userSchema);
