import {
  faCartPlus,
  faMinus,
  faPlus,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useShoppingCar } from "../../Component/Context/ShopincartComp";
import FormatCurr from "../../Component/Store/FormatCurr";
import "./Product.css";

const Product = ({ id, name, price, imgURL }) => {
  const { getItemQuantity } = useShoppingCar();
  const { increaseCartQuantity, decreaseCartQuantity, removeCartQuantity } =
    useShoppingCar();
  const qua = getItemQuantity(id);

  return (
    <section className="product-view">
      <div className="card ">
        <img src={imgURL} className="img-product" alt="product" />
        <div className="card-title">
          <span>{name}</span>
        </div>
        <div className="card-span">
          <span>{FormatCurr(price)}</span>
        </div>
        {qua === 0 ? (
          <div className="add-qua">
            <FontAwesomeIcon
              icon={faCartPlus}
              onClick={() => increaseCartQuantity(id)}
            />
          </div>
        ) : (
          <div className="qua-deta">
            <div className="add">
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => increaseCartQuantity(id)}
              />
              <span> {qua} in Cart</span>
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() => decreaseCartQuantity(id)}
              />
            </div>
            <div className="remove">
              <FontAwesomeIcon
                icon={faRemove}
                onClick={() => removeCartQuantity(id)}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;
