import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/inventory">Manage Inventory</Link>
            </li>
            <li>
              <Link to="/login" className="login-btn">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
