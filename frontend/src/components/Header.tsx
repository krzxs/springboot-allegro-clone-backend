import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header() {
  return (
    <div className="w-full h-12 bg-zinc-600 text-white font-semibold flex items-center justify-between">
      <Link to="/" className="ml-10">
        ALLEGRO
      </Link>
      <div className="flex justify-between w-44">
        <Cart />
        <Link to="/login" className="mr-10">
          LOG IN
        </Link>
      </div>
    </div>
  );
}

export default Header;
