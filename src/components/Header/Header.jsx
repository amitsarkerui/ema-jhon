import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

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
              <a href="#">Order</a>
            </li>
            <li>
              <a href="#">Order Review</a>
            </li>
            <li>
              <a href="#">Manage Inventory</a>
            </li>
            <li>
              <a href="#" className="login-btn">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
