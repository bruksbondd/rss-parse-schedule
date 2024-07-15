import { Router } from 'express';
import { parse } from './controllers/Parse';

const ParserRouter = Router();

ParserRouter.route('/parse').get(parse);

export default ParserRouter;
