import React from "react";
import "./posts.css";

export default function Posts() {
  return (
    <div className="main">
      <div className="form-box">
        <h3> Add Post </h3>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <button type="submit"> Add Post </button>
        </form>
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
