import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AddProduct.css";
const AddProduct = ({ isLoggedIn }) => {
  const [productname, setProductname] = useState("");
  const [specs, setSpecs] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

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
      productname: productname,
      specs: specs,
      price: price,
      image: image,
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
      <h2 className="h2-addpost">Add New Product</h2>
      {authenticated ? (
        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group-post">
            <label
              className="label-addpost"
              htmlFor="product-name"
              placeholder="Product Name"
            >
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productname"
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="form-group-post">
            <label className="label-addpost" htmlFor="price">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </div>
          <div className="form-group-post">
            <label className="label-addpost" htmlFor="specs">
              Specs
            </label>
            <textarea
              className="form-control"
              id="specs"
              rows="5"
              value={specs}
              onChange={(e) => setSpecs(e.target.value)}
              placeholder="Product Specs"
            ></textarea>
          </div>
          <div className="form-group-post">
            <label className="label-addpost" htmlFor="image">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.files[0])}
            />
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

export default AddProduct;
