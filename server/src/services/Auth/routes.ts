
import { Router } from 'express';
import { registerUser } from './controllers/register';
import { authUser } from './controllers/authUser';

const AuthRouter = Router();

AuthRouter.route('/login').post(authUser);
AuthRouter.route('/register').post(registerUser);

export default AuthRouter;
