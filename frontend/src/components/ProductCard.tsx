import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./Button/Button";
import { CartContext } from "./CartContext";

type props = {
  id: number;
  uniqueId: string;
  name: string;
  price: number;
  imageUrl: string;
};

function ProductCard({ name, price, imageUrl }: props) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col w-64 h-96 border-2 p-6 text-center font-Inter shadow-lg">
      <Link to="/product/:id">
        <img src={imageUrl} alt="" className="h-46 ml-auto mr-auto" />
      </Link>
      <Link to="/product/:id">
        <p className="font-semibold text-xl mt-4 line-clamp-2">{name}</p>
      </Link>
      <div className="flex whitespace-nowrap justify-center space-x-3 mt-auto">
        <Button text="BUY NOW" scalable />

        <Button
          text="ADD TO CART"
          onClick={() => {
            addItemToCart({ name, price, imageUrl });
          }}
          scalable
        />
      </div>

      <p className="font-bold mt-7 text-yellow-400">{price} ZŁ</p>
    </div>
  );
}

export default ProductCard;
