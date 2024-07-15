import { object, string, array } from "yup";
import type { Post } from "lib/interfaces/postValidator";

export const modalPostSchema = object({
  creator: string().required().max(100),
  title: string().required().max(180),
  link: string().required().max(300),
  pubDate: string().required().max(100),
  "dc:creator": string().required().max(100),
  content: string().required(),
  contentSnippet: string().required(),
  guid: string().required().length(10),
  categories: array().of(string()).max(50),
  isoDate: string().required().max(100),
});

export const validateModalPost = (postState: Post) => {
  return modalPostSchema.isValid(postState);
};
