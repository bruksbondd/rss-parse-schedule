import { object, string, array, number } from "yup";
import type { FetchPostsInterface } from "lib/interfaces/FetchPosts";
import { Post } from "lib/interfaces/postValidator";

export const fetchPostsSchema = object({
  data: array().of(
    object({
      creator: string().required().max(100),
      title: string().required().max(180),
      link: string().required().max(300),
      pubDate: string().required().max(100),
      "dc:creator": string().required().max(100),
      content: string().required(),
      contentSnippet: string().required(),
      guid: string().required(),
      categories: array().of(string()).max(300),
      isoDate: string().required().max(100),
    })
  ),
  info: object({
    currentPage: number().required(),
    pageSize: number().required(),
    startIndex: number().required(),
    totalPages: number().required(),
    totalPosts: number().required(),
  }),
});

export const postsSchema = array().of(
  object({
    creator: string().required().max(100),
    title: string().required().max(180),
    link: string().required().max(300),
    pubDate: string().required().max(100),
    "dc:creator": string().required().max(100),
    content: string().required(),
    contentSnippet: string().required(),
    guid: string().required(),
    categories: array().of(string()).max(300),
    isoDate: string().required().max(100),
  })
);

export const validateFetchPosts = async (data: FetchPostsInterface) => {
  
  return fetchPostsSchema.isValidSync(data);
};

export const validatePosts = (data: Post[]) => {
  return postsSchema.isValidSync(data);
};
