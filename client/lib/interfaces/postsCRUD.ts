import type { Post } from "lib/interfaces/postValidator";

export type PostsCurrentPage = number;
export type PostsTotalPosts = number;
export type PostsPageSize = number;
export type PostsStartIndex = number;
export type PostsTotalPages = number;
export type PostsQueryParams = string;
export type PostsArray = Post[];
export type ChangeFlag = boolean;

export interface PostsInfo {
  currentPage: PostsCurrentPage;
  totalPosts: PostsTotalPosts;
  pageSize: PostsPageSize;
  startIndex: PostsStartIndex;
  totalPages: PostsTotalPages;
}

export interface PostsCRUD {
  postsInfo: PostsInfo;
  postsData: PostsArray;
  queryParams: PostsQueryParams;
  changeFlag: ChangeFlag;
}
