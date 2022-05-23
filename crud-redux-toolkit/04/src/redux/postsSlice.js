import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
  },
  reducers: {
    addPost: (state, action) => {
      console.log(action);
      state.items.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
