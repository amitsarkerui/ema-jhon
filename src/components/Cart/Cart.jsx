import React from "react";
import "./Cart.css";

const Cart = ({ cart, deleteCart, children }) => {
  // console.log("cart----4>", props);
  // const cart = props.cart;
  // console.log(cart);
  let quantity = 0;
  let total = 0;
  let shippingTotal = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    shippingTotal = shippingTotal + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 15) / 100;
  const grandTotal = total + tax + shippingTotal;
  return (
    <div className="cart mt-10 bg-orange-200 p-5 rounded-lg">
      <h6 className=" font-bold">Order Summary</h6>
      <p>Selected product: {quantity}</p>
      <p>Price: {total}</p>
      <p>Shipping Fee : {shippingTotal.toFixed(2)}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h6 className="text-lg font-bold" style={{ marginTop: "20px" }}>
        Grand Total : {grandTotal.toFixed(2)}
      </h6>
      <button
        onClick={deleteCart}
        className="w-full bg-red-500 flex items-center justify-between px-5 py-2 rounded-md mt-10 text-white"
      >
        <p grow>Delete Cart</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </button>
      {children}
    </div>
  );
};

export default Cart;
