import { array, object, string } from 'yup';
import { Post } from '../model';

export const postSchema = object({
  creator: string().required().max(100),
  title: string().required().max(180),
  link: string().required().max(300),
  pubDate: string().required().max(100),
  'dc:creator': string().required().max(100),
  content: string().required(),
  contentSnippet: string().required(),
  guid: string().required().length(10),
  categories: array().of(string()).max(50),
  isoDate: string().required().max(100),
});

export const validatePostStructure = (post: Post) => {
  return postSchema.isValid(post);
};
