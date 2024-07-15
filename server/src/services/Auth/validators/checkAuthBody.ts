import { object, string } from 'yup';
import { User } from '../controllers/register';

export const authSchema = object({
  username: string().required().max(100),
  password: string().required().max(100),
});

export const checkAuthBody = (body: User) => {
  return authSchema.isValid(body);
};
