import React from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-12 bg-zinc-600 text-white font-semibold flex items-center justify-between">
      <Link to="/" className="ml-10">
        ALLEGRO
      </Link>
      <Link to="/login" className="mr-10">
        LOG IN
      </Link>
    </div>
  );
}

export default Header;
