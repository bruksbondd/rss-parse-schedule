import jwt from 'jsonwebtoken'; // JSON Web Tokens are an open, industry standard method for representing claims securely between two parties.
import dotenv from 'dotenv';
import type { Response } from '../..';
import { checkExistenceOfToken } from '../validators/checkExistenceOfToken';
import { varifyTypeOfToken } from '../validators/varifyTypeOfToken';

dotenv.config(); // Load variables from file .env.

// Create middleware for authentication
export const verifyToken = (req: any, res: Response, next: any) => {
  // Check if token exist in headers
  if (!checkExistenceOfToken(req.headers['x-access-token'])) {
    return res.status(400).json({
      message: 'A token is required for authentication',
      data: req.headers['x-access-token'],
    });
  }

  const token: string = req.headers['x-access-token'];

  // Check type of token
  if (!varifyTypeOfToken(token, 'string')) {
    return res
      .status(401)
      .json({ message: 'Invalid type of token', data: token });
  }
  try {
    // Verify and pass request
    jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token', data: token });
  }
  return next();
};
