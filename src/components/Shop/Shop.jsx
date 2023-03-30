import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);
  const getCart = (product) => {
    console.log(product);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            getCart={getCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h6>Order Summary</h6>
      </div>
    </div>
  );
};

export default Shop;
