import { useEffect, useCallback } from "react";
import type { FC } from "react";
import { DataView } from "primereact/dataview";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/app/store";

import { PostTemplate } from "src/components/PostsView/PostTemplate";
import { renderPosts } from "pages/api/posts/renderPosts";
import NativePaginator from "src/components/NativePaginator/NativePaginator";

import { SkeletonTemplate } from "./SkeletonTemplate";
import { postsSkeletonTemplateData } from "lib/constants/templates";

import { setQueryParams } from "src/features/Posts/PostsCRUD";
import { toggleFlag } from "src/features/Posts/PostsCRUD";

export const PostsView: FC = () => {
  const dispatch = useDispatch();

  const changeFlag = useSelector(
    (state: RootState) => state.postsCRUD.changeFlag
  );
  const queryParams = useSelector(
    (state: RootState) => state.postsCRUD.queryParams
  );
  const posts = useSelector((state: RootState) => state.postsCRUD.postsData);
  const pageSize = useSelector(
    (state: RootState) => state.postsCRUD.postsInfo.pageSize
  );
  const totalPosts = useSelector(
    (state: RootState) => state.postsCRUD.postsInfo.totalPosts
  );
  const currentPage = useSelector(
    (state: RootState) => state.postsCRUD.postsInfo.currentPage
  );
  const startIndex = useSelector(
    (state: RootState) => state.postsCRUD.postsInfo.startIndex
  );

  const queryParamsInURL = useCallback(() => {
    dispatch(setQueryParams(`?page=${currentPage}`));
    dispatch(toggleFlag(true));
  }, [dispatch, currentPage, startIndex]);

  const renderPostsCallback = useCallback(() => {
    renderPosts(changeFlag, queryParams, dispatch);
  }, [changeFlag, queryParams, dispatch]);

  useEffect(() => {
    queryParamsInURL();
  }, [queryParamsInURL]);


  useEffect(() => {
    renderPostsCallback();
  }, [renderPostsCallback]);

  const validateLoadingValue = () => {
    if (posts.length === 0) {
      return postsSkeletonTemplateData;
    }

    return posts;
  };

  const validateLoadingTemplate = () => {
    if (posts.length === 0) {
      return SkeletonTemplate;
    }

    return PostTemplate;
  };

  return (
    <div className="card w-full">
      <DataView
        value={validateLoadingValue()}
        itemTemplate={validateLoadingTemplate()}
      />
      <NativePaginator
        startIndex={startIndex}
        pageSize={pageSize}
        totalPosts={totalPosts}
        className="justify-conten-center mb-5 mt-5"
      />
    </div>
  );
};
export default PostsView;
