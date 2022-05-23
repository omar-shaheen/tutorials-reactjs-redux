import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: 'Posts',
  initialState: {
    // title: "",
    // desc: "",
  },
  reducers: {
    // addPosts: (state, action) => {
    //   state.title = state.title;
    //   state.desc = state.desc;
    // }
  }
  
})

// const {addPosts} = postsSlice.actions;

export default postsSlice.reducer;
