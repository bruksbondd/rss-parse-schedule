import type { PostsInfo } from "lib/interfaces/postsCRUD";
import type { Post } from "lib/interfaces/postValidator";

export interface FetchPostsInterface {
  data: Post[];
  info: PostsInfo;
}
