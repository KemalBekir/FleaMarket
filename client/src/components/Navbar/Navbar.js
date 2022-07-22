import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
      <nav className="nav">
        <span className="main-logo" >FleaMarket</span>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
          <li>Catalog</li>
          <li>Profile</li>
        </ul>
      </nav>
  );
};

export default Navbar;
