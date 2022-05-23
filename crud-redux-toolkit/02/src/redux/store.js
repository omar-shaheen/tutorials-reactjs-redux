import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./reducers/postsSlice.js";

const store = configureStore({
  reducer: {
    posts: postsSlice
  },
});

export default store;
