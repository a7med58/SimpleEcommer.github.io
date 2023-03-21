import ShoppingCartSlider from "../ShoppingCartSlider/ShoppingCartSlider";

const { createContext, useState, useContext, useEffect } = require("react");

const ShoppingCartContexet = createContext({});
const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];
const ShoppingCartProvider = ({ children }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const openCart = () => {
    SetIsOpen(true);
  };
  const closeCart = () => {
    SetIsOpen(false);
  };
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItem) => {
      const existingItem = currItem.find((item) => item.id === id);
      if (existingItem != null) {
        if (existingItem.quantity > 1) {
          return currItem.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          return currItem.filter((item) => item.id !== id);
        }
      } else {
        return currItem;
      }
    });
  };
  const removeCartQuantity = (id) => {
    setCartItems((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContexet.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeCartQuantity,
        openCart,
        closeCart,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCartSlider isOpen={isOpen} />
    </ShoppingCartContexet.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCar = () => {
  return useContext(ShoppingCartContexet);
};
