import React from "react";
import { useState } from "react";
import { CartItem } from "../components/Cart";

let x: any;
const CartContext = React.createContext(x);

function CartContextProvider(props: any) {
  const [cartItemsContext, setCartItemsContext] = useState<Array<CartItem>>([]);

  const addItemToCart = (item: CartItem) => {
    return setCartItemsContext((prevCartItems) => [...prevCartItems, item]);
  };

  console.log("komponent cartContext sie zrerenderowal");

  const removeItemFromCart = (item: CartItem) => {
    const index = cartItemsContext.indexOf(item);
    setCartItemsContext((prevCartItems) => [
      ...prevCartItems.slice(0, index),
      ...prevCartItems.slice(index + 1),
    ]);
  };

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart,
        cartItemsContext: cartItemsContext,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
