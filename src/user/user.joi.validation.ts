import Joi from 'joi';

// Define the validation schema for the user
export const userValidationSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z\s]+$/)
    .required()
    .messages({
      'string.pattern.base': 'Invalid name string.',
      'any.required': 'Name is required field.',
    }),

  age: Joi.number()
    .integer()
    .min(18) // assuming the user must be at least 18 years old
    .required()
    .messages({
      'number.base': 'Age must be a number.',
      'any.required': 'Age is required field.',
      'number.min': 'Age must be at least 18.',
    }),

  profession: Joi.string().required().messages({
    'any.required': 'Profession is required field.',
  }),

  address: Joi.string().required().messages({
    'any.required': 'Address is required field.',
  }),

  password: Joi.string()
    .min(8) // assuming minimum password length of 8 characters
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters long.',
      'any.required': 'Password is required field.',
    }),

  email: Joi.string().email().required().messages({
    'string.email': 'Email is not valid.',
    'any.required': 'Email is required field.',
  }),

  phoneNumber: Joi.string()
    .pattern(/^[0-9]+$/) // assuming phone number should only contain digits
    .required()
    .messages({
      'string.pattern.base': 'Enter a valid phone number.',
      'any.required': 'Phone number is required field.',
    }),
});
