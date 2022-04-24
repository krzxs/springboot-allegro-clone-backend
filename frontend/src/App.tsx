import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import { CartContextProvider } from "./components/CartContext";

function App() {
  return (
    <CartContextProvider>
      <>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </>
    </CartContextProvider>
  );
}

export default App;
