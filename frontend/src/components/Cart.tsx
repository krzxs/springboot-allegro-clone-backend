import React from "react";
import { ShoppingCart16 } from "@carbon/icons-react";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../components/CartContext";

export interface CartItem {
  name: string;
  price: number;
  imageUrl: string;
}
function Cart() {
  const { cartItemsContext } = useContext(CartContext);

  const [showList, setShowList] = useState<boolean>(false);

  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);

  useEffect(() => {
    setCartItems(cartItemsContext);
  }, [cartItemsContext]);

  const listOfItemsInCart = cartItems.map((item: any) => item.name);

  return (
    <div>
      <a href="#" onClick={() => setShowList((prev) => !prev)}>
        <span className="bg-red-700 w-5 text-xs absolute ml-6 -mt-2 rounded-full inline-block text-center">
          {cartItems.length}
        </span>
        <ShoppingCart16 className="w-6 h-6" />
      </a>
      {showList && (
        <div className="absolute w-60 h-80 bg-gray-300 -ml-52 mt-3 overflow-y-scroll">
          {listOfItemsInCart}
        </div>
      )}
    </div>
  );
}

export default Cart;
