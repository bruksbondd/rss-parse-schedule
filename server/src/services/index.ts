import AuthRouter from './Auth/routes';
import PostsRouter from './Posts/routes';
import ParserRouter from './Parser/routes';
import { Express } from 'express';

export interface Response {
  json: ({ message, data }: { message: string; data: any }) => void;
  status: (code: number) => Response;
}

const router = (app: Express) => {
  app.use('/api', AuthRouter);
  app.use('/api', PostsRouter);
  app.use('/api', ParserRouter);
};

export default router;
