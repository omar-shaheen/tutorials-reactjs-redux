import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: []
  },
  reducers: {
    addPost: (state, action) => {
      console.log(action);
      state.posts.push()
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPost } = postsSlice.actions

export default postsSlice.reducer