import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import products from "../../Data/Products";
import CartItem from "../CartItem/CartItem";
import { useShoppingCar } from "../Context/ShopincartComp";
import FormatCurr from "../Store/FormatCurr";

const ShoppingCartSlider = ({ isOpen }) => {
  const { cartItems, closeCart } = useShoppingCar();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={2}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total {""}
            {FormatCurr(
              cartItems.reduce((total, CartItem) => {
                const item = products.find((i) => i.id === CartItem.id);
                return total + (item?.price || 0) * CartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCartSlider;
