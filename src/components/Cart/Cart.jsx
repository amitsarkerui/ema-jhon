import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  let total = 0;
  let shippingTotal = 0;
  for (const product of cart) {
    total = total + product.price;
    shippingTotal = product.shipping;
  }
  const tax = (total * 15) / 100;
  const grandTotal = total + tax + shippingTotal;
  return (
    <div className="cart">
      <h6>Order Summary</h6>
      <p>Selected product: {cart.length}</p>
      <p>Price: {total}</p>
      <p>Shipping Fee : {shippingTotal.toFixed(2)}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h6 style={{ marginTop: "20px" }}>
        Grand Total : {grandTotal.toFixed(2)}
      </h6>
    </div>
  );
};

export default Cart;
