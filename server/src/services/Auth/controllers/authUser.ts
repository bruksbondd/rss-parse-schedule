import jwt from 'jsonwebtoken'; // JSON Web Tokens are an open, industry standard method for representing claims securely between two parties.
import dotenv from 'dotenv';
import AdminModel from '../model';

import type { Response } from '../..';
import { checkAuthBody } from '../validators/checkAuthBody';
import { varifyEncryptedPassword } from '../validators/varifyEncryptedPassword';
import { RegisterRequest, User } from './register';

dotenv.config(); 




export const authUser = async (req: RegisterRequest, res: Response) => {

  const { username } = req.body;


  if (!(await checkAuthBody(req.body))) {
    return res
      .status(400)
      .json({ message: 'All input is required', data: req.body });
  }

  const admin: User | null = await AdminModel.findOne({ username });

  if (
    admin &&
    (await varifyEncryptedPassword(req.body.password, admin.password))
  ) {

    const token = jwt.sign(req.body, process.env.JWT_SECRET as string, {
      expiresIn: '1h', 
    });


    return res
      .status(200)
      .json({ message: 'Token has been successfully', data: token });
  }

  return res
    .status(401)
    .json({ message: 'Invalid username or password', data: req.body });
};
