import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Stack } from "react-bootstrap";
import products from "../../Data/Products";
import { useShoppingCar } from "../Context/ShopincartComp";
import FormatCurr from "../Store/FormatCurr";
import "./CartItem.css";
const CartItem = ({ id, quantity }) => {
  const item = products.find((i) => i.id === id);
  const { removeCartQuantity } = useShoppingCar();
  if (item === null) return null;
  return (
    <Stack direction="horizontal">
      <div className="container">
        <div className="row">
          <div className="box-cart">
            <img src={item.imgURL} alt="cart" />
            <div>
              <span>{item.name}</span>
              {""}
              {quantity > 1 && <span>* {quantity}</span>}
              <span>{FormatCurr(item.price)}</span>
              <span>{FormatCurr(item.price * quantity)}</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faDeleteLeft}
                onClick={() => removeCartQuantity(id)}
              />
            </div>
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default CartItem;
