import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/reducer/post";
import aboutReducer from "../redux/reducer/about";

const reducer = {
  post: postReducer,
  about: aboutReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
