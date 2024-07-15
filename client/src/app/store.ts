import { configureStore } from "@reduxjs/toolkit";
import loginFormReducer from "../features/Login/LoginService";
import type { FormState } from "lib/interfaces/LoginForm";
import type { PostsView } from "lib/interfaces/postsView";
import type { PostsCRUD } from "lib/interfaces/postsCRUD";
import PostsCRUDReducer from "src/features/Posts/PostsCRUD";
import PostsViewReducer from "src/features/Posts/PostsView";


export interface RootState {
  loginForm: FormState;
  postsCRUD: PostsCRUD;
  postsView: PostsView;
}

// Configure the Redux store
const store = configureStore({
  reducer: {
    loginForm: loginFormReducer, // Add the login form reducer to the store
    postsCRUD: PostsCRUDReducer, // Add posts crud reducer to the store
    postsView: PostsViewReducer, // Add posts view reducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
