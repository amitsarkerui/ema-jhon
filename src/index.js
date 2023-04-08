import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import LoginPage from "./components/Login/LoginPage";
import Layout from "./Layout/Layout";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import LoginPage from "./components/Login/LoginPage";
import cartProductLoader from "./loader/CartProductLoader/CartProductLoader";
import OrderProcess from "./components/Process/OrderProcess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartProductLoader,
      },
      {
        path: "/orderprocess",
        element: <OrderProcess></OrderProcess>,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
