import React from "react";
import "./index.css";

export default function PostsList({ posts }) {
  //   console.log(anotherData);
  return (
    <div className="postList">
      {posts.map((post) => (
        <div className="single-post">{post.title}</div>
      ))}
    </div>
  );
}
