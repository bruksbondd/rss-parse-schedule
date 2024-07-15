import { Router } from 'express';
import { addPost } from './controllers/addPost';

import { getAllPosts } from './controllers/getAllPosts';
import { verifyToken } from '../Auth/controllers/varifyToken';

export interface getPostById {
  params: {
    guid: string;
  };
}

const PostsRouter = Router();

PostsRouter.route('/posts')
  .post(verifyToken, addPost)
  .get(verifyToken, getAllPosts);

export default PostsRouter;
