import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, name, price, ratings, ratingsCount, img, seller } = props.product;
  const getCart = props.getCart;
  return (
    <div className="product">
      <img
        src={
          img
            ? img
            : `../../images/placeholder/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg`
        }
        alt=""
      />
      <h6 className="heading-name">{name}</h6>
      <p>Price $:{price}</p>
      <p>Manufacturer: {seller}</p>
      <p>Rattings :{ratings} Stats</p>
      <button onClick={() => getCart(props.product)} className="product-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
