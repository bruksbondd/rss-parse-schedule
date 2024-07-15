import { POSTS_ENDPOINT } from "lib/constants/endpoints";
import type { Token } from "lib/interfaces/Token";
import type { PostsQueryParams } from "lib/interfaces/postsCRUD";

// Dynamic async function which works with query params
export const getAllPosts = async (token: Token, query?: PostsQueryParams) => {
  if (!query) query = "";
  return await fetch(`${POSTS_ENDPOINT}${query}`, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  }).catch((error) => error);
};
