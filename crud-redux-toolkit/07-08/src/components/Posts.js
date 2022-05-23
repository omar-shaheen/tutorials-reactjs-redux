import "./posts.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePost } from "../redux/postsSlice";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // console.log(title, desc);

  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");

  const posts = useSelector((state) => state.posts.items);

  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);

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
                  <button
                    onClick={() => {
                      setIsEdit(true);
                      setId(post.id);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => dispatch(deletePost(post.id))}>
                    Delete
                  </button>
                </div>

                <br />

                {isEdit && id == post.id && (
                  <>
                    <input
                      type="text"
                      placeholder="Upadted Title"
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Upadted Desc"
                      onChange={(e) => setUpdatedDesc(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        dispatch(
                          updatePost({
                            id: post.id,
                            title: updatedTitle,
                            desc: updatedDesc,
                          })
                        );
                        setIsEdit(false)
                      }}
                    >
                      Update
                    </button>
                  </>
                )}
              </div>
            ))
          : "There No Posts"}
      </div>
    </div>
  );
}
