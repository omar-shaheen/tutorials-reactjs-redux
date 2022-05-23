import "./posts.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/postsSlice";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // console.log(title, desc);

  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="form-box">
        <h3> Add Post </h3>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            dispatch(addPost({ id: 1, title, desc }));
          }}
        >
          {" "}
          Add Post{" "}
        </button>
      </div>
      <div className="posts-items">
        <h3>Posts</h3>
        <div className="item">
          <h4>Post Title</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="btns">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
