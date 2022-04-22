import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button/Button";

type props = {
  id: number;
  uniqueId: string;
  name: string;
  price: number;
  imageUrl: string;
};

function ProductCard({ name, price, imageUrl }: props) {
  return (
    <div className="flex justify-center flex-col w-64 h-96 border-2 p-6 text-center font-Inter shadow-lg">
      <Link to="/product/:id">
        <img src={imageUrl} alt="" className="h-48" />
      </Link>
      <Link to="/product/:id">
        <p className="font-semibold text-xl mt-4 line-clamp-2">{name}</p>
      </Link>

      <Button text="BUY NOW" />
      <p className="font-bold mt-auto text-yellow-400">{price} ZŁ</p>
    </div>
  );
}

export default ProductCard;
