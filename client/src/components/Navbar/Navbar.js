import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
      <nav className="nav">
        <span className="main-logo" >FleaMarket</span>
        <ul>
          <li><Link style={{ textDecoration: 'none'}} to="/">Home</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to="/login">Login</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to="/register">Register</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to="/catalog">Catalog</Link></li>
          <li><Link style={{ textDecoration: 'none'}} to="/profile">Profile</Link></li>
        </ul>
      </nav>
  );
};

export default Navbar;
