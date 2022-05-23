import "./posts.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../redux/postsSlice";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // console.log(title, desc);

  const posts = useSelector((state) => state.posts.items);

  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="form-box">
        <h3> Add Post </h3>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="email"
          placeholder="Post Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            dispatch(addPost({ id: posts.length + 1, title, desc }));
            setTitle("");
            setDesc("");
          }}
        >
          Add Post
        </button>
      </div>
      <div className="posts-items">
        <h3>Posts</h3>

        {posts.length > 0
          ? posts.map((post) => (
              <div className="item" key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.desc}</p>
                <div className="btns">
                  <button>Edit</button>
                  <button onClick={() => dispatch(deletePost(post.id))}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          : "There No Posts"}
      </div>
    </div>
  );
}
