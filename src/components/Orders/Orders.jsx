import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewCart from "../ReviewCart/ReviewCart";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [carts, setCarts] = useState(savedCart);
  // console.log(products);
  const deleteHandler = (id) => {
    const restProduct = carts.filter((pd) => pd.id !== id);
    setCarts(restProduct);
    removeFromDb(id);
  };
  const deleteCart = () => {
    setCarts([]);
    deleteShoppingCart();
  };
  return (
    <div className="container flex justify-between">
      <div className="mt-10">
        {carts.map((cart) => (
          <ReviewCart
            key={cart.id}
            cart={cart}
            deleteHandler={deleteHandler}
          ></ReviewCart>
        ))}
      </div>
      <div>
        <Cart cart={savedCart} deleteCart={deleteCart}>
          <Link to={"/orderprocess"}>
            <button className="w-full bg-blue-500 flex items-center justify-between px-5 py-2 rounded-md mt-4 text-white">
              <p>Process Order</p>
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
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
              </div>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
