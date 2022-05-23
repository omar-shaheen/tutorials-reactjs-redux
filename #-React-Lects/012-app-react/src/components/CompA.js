import axios from "axios";
import React, { useEffect, useState } from "react";

function CompA() {
  //https://jsonplaceholder.typicode.com/posts

  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        // console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e)=> setId(e.target.value)} />

      {post.id} - {post.title}

      {/* {post.map((post) => (
        <div key={post.id}>
          {post.id} - {post.title}
        </div>
      ))} */}
    </div>
  );
}

export default CompA;
