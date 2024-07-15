import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
import UserModel from '../model';

import type { Response } from '../..';
import { checkAuthBody } from '../validators/checkAuthBody';

dotenv.config();

export interface User {
  username: string;
  password: string;
}

export interface RegisterRequest {
  body: {
    username: string;
    password: string;
  };
}

export const registerUser = async (req: RegisterRequest, res: Response) => {
  const { username } = req.body;

  if (!(await checkAuthBody(req.body))) {
    return res
      .status(400)
      .json({ message: 'All input is required', data: req.body });
  }

  const existingUser: User | null = await UserModel.findOne({ username });

  if (existingUser) {
    return res
      .status(400)
      .json({ message: 'Email already exists', data: req.body });
  }

  const hashedPassword = await bcryptjs.hash(req.body.password, 4);

  // Create a new user
  try {
    const newUser = new UserModel({
      username: req.body.username,
      password: hashedPassword,
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: 'User registered successfully', data: req.body });
  } catch (error: any) {
    res.status(500).json({ message: error.message, data: req.body });
  }

  // Return an error response if the username or password is invalid
  return res
    .status(401)
    .json({ message: 'Invalid username or password', data: req.body });
};
