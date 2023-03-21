import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewProduct.css";
const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      {authenticated ? (
        <div className="card-body text-center">
          <h2 className="h2-viewpost">Post</h2>
          <div className="post-box">
            <h3 className="h3-viewpost">{post.title}</h3>
            <p className="p-viewpost">{post.body}</p>
          </div>
        </div>
      ) : null}
      {!authenticated && <p>Please log in to View Panel.</p>}
    </div>
  );
};

export default ViewPost;
