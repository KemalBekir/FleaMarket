import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
      <nav className="nav">
        <span className="main-logo" >FleaMarket</span>
        <ul>
          <li><Link style={{ textDecoration: 'none', color: 'white'}} to="/">Home</Link></li>
          <li><Link style={{ textDecoration: 'none', color: 'white'}} to="/login">Login</Link></li>
          <li><Link style={{ textDecoration: 'none', color: 'white'}} to="/register">Register</Link></li>
          <li><Link style={{ textDecoration: 'none', color: 'white'}} to="/catalog">Catalog</Link></li>
          <li><Link style={{ textDecoration: 'none', color: 'white'}} to="/profile">Profile</Link></li>
        </ul>
      </nav>
  );
};

export default Navbar;
