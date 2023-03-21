import React, { useEffect, useState } from "react";
import CartItemPage from "../../Component/CartItemPage/CartItemPage";
import { useShoppingCar } from "../../Component/Context/ShopincartComp";
import "./ViewProducts.css";

const ViewPosts = ({ isLoggedIn }) => {
 const [authenticated, setAuthenticated] = useState(false);
 useEffect(() => {
   const token = localStorage.getItem("token");
   if (token) {
     setAuthenticated(true);
   }
 }, []);


  const { cartItems } = useShoppingCar();

  return (
    <div className="container viewposts">
      <h2 className="h2-viewposts ">All Pay Product</h2>
      {authenticated ? (
        <div className="box-store">
          {cartItems.map((item) => (
            <CartItemPage key={item.id} {...item} />
          ))}
        </div>
      ) : null}
      {!authenticated && <p>Please log in to View Panel.</p>}
    </div>
  );
};

export default ViewPosts;
