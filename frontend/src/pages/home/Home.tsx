import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";

function Home() {
  const [products, setProducts] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("http://localhost:8080/allegro/products/getAllProducts")
      .then((resp) => resp.json())
      .then((products) => setProducts(products));
  }, []);
  const listProducts = products.map((product) => {
    return <ProductCard key={product.uniqueId} {...{ ...product }} />;
  });

  return (
    <div className="flex justify-center">
      <div className="flex w-2/3 h-full flex-wrap justify-center gap-11 mt-6">
        {listProducts}
      </div>
    </div>
  );
}

export default Home;
