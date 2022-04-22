import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";

function Header() {
  return (
    <div className="w-full h-12 bg-zinc-600 text-white font-semibold flex items-center justify-between">
      <Link to="/" className="ml-10">
        ALLEGRO
      </Link>
      <ul className="flex space-x-8 mr-10">
        <li>
          <Link to="/login">LOG IN</Link>
        </li>
        <Link to="/register">REGISTER</Link>
      </ul>

      <Routes>
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Routes>
    </div>
  );
}

export default Header;
