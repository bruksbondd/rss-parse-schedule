import type { Dispatch } from "@reduxjs/toolkit";
import { getToken } from "lib/utils/getToken";
import { getAllPosts } from "lib/posts/getAllPosts";
import { validateFetchPosts } from "lib/validators/validateFetchPosts";
import {
  setPosts,
  setTotalPosts,
  setCurrentPage,
  setPageSize,
  setTotalPages,
  setStartIndex,
  toggleFlag,
} from "src/features/Posts/PostsCRUD";
import { RenderPosts } from "lib/interfaces/postsView";
import { validateToken } from "lib/validators/validateToken";
import { navigateToLogin } from "lib/utils/navigateToLogin";
import { setErrorMessage } from "src/features/Login/LoginService";

export const renderPosts: RenderPosts = async (
  changeFlag: boolean,
  queryParams: string,
  dispatch: Dispatch
) => {
  
  if (!changeFlag) {
    return;
  }
  
  const token = getToken();
  if (!(await validateToken(token))) {
    navigateToLogin();
    return;
  }
  try {
    // Make API call to submit form data
    const response = await getAllPosts(token, queryParams);

    // Handle response
    if (response.status === 200) {
      const result = await response.json();

      if (!(await validateFetchPosts(result.data))) {
        console.log(result.data);
        throw new Error("Invalid data fetched from server");
      }

   
      // Get posts
      dispatch(setPosts(result.data.data));
      // Get total posts count
      dispatch(setTotalPosts(result.data.info.totalPosts));
      // Get total pages count
      dispatch(setTotalPages(result.data.info.totalPages));
      // Get start index
      dispatch(setStartIndex(result.data.info.startIndex));
      // Get page size
      dispatch(setPageSize(result.data.info.pageSize));
      // Get current page
      dispatch(setCurrentPage(result.data.info.currentPage));
      // Toggle change flag
      dispatch(toggleFlag(false));
    } else {
      navigateToLogin();
      throw new Error("Unknown error. Check internet connection");
    }
  } catch (error: any) {
    dispatch(
      setErrorMessage({
        message: error.message,
      })
    );
  }
};
