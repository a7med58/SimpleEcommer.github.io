import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ProductsData from "../../Data/Products";
import Login from "../../Page/Login/Login";
import Product from "../../Page/UserPanel/Product";
import Banner from "../Banner/Banner";
import "./Store.css"
const Store = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const categories = [
    "all",
    ...new Set(ProductsData.map((product) => product.category)),
  ];

  const productsToDisplay =
    selectedCategory === "all"
      ? ProductsData
      : ProductsData.filter((product) => product.category === selectedCategory);

  const filteredProducts =
    searchTerm === ""
      ? productsToDisplay
      : productsToDisplay.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInputRef.current.value);
  };

  return (
    <>
      <Banner title="Store" smtitle="store" />
      <div className="container ">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="btn-group">
              {categories.map((category) => (
                <button
                  type="button"
                  className={`btn ${
                    selectedCategory === category
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  key={category}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}
            </div>
            <form className="searchproduct" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Product Name"
                ref={searchInputRef}
              />
              <button type="submit">Search</button>
            </form>
          </div>
          {authenticated ? (
            filteredProducts.map((product) => (
              <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <Product {...product} />
                </Link>
              </div>
            ))
          ) : (
            <Login />
          )}
        </div>
      </div>
    </>
  );
};

export default Store;
