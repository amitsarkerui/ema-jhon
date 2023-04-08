import React from "react";

const OrderProcess = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Order Summary</h1>

        <div className="bg-white shadow-md rounded-lg p-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>

          <div className="flex flex-col mb-4">
            <div className="flex justify-between items-center mb-2">
              <img
                src="https://picsum.photos/50"
                alt="Product"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">Product Name</h3>
                <p className="text-gray-600">$19.99</p>
              </div>
              <span>1</span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <img
                src="https://picsum.photos/50"
                alt="Product"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">Another Product Name</h3>
                <p className="text-gray-600">$29.99</p>
              </div>
              <span>1</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold">$49.98</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Shipping Address</h2>

          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border-gray-300 p-2 w-full"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border-gray-300 p-2 w-full"
              />
            </div>

            <div className="col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="border-gray-300 p-2 w-full"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="border-gray-300 p-2 w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
