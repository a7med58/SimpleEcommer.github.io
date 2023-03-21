import { useEffect, useState } from "react";
import ProductsData from "../../Data/Products";
import Login from "../../Page/Login/Login";
import Product from "../../Page/UserPanel/Product";
import Banner from "../Banner/Banner";

const Store = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

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
          </div>
          {authenticated ? (
            productsToDisplay.map((product) => (
              <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
                <Product {...product} />
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
