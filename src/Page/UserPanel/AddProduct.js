import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AddProduct.css";
const AddPost = ({ isLoggedIn }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newArticle = {
      title: title,
      content: content,
    };
    axios
      .post("https://your-api-url.com/articles", newArticle)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="h2-addpost">Add a new article</h2>
      {authenticated ? (
        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group-post">
            <label
              className="label-addpost"
              htmlFor="title"
              placeholder="Title"
            >
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="form-group-post">
            <label className="label-addpost" htmlFor="content">
              Content
            </label>
            <textarea
              className="form-control"
              id="content"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Post Contant"
            ></textarea>
          </div>
          <button type="submit" className="btn-add">
            Submit
          </button>
        </form>
      ) : null}
      {!authenticated && <p>Please log in to View Panel.</p>}
    </div>
  );
};

export default AddPost;
