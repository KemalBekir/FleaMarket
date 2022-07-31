import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/userService";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    localStorage.setItem('userData', JSON.stringify(token));
  }

  return (
    <section className="login-section">
      <h3 className="login-title">Login</h3>
      <form className="login-form" type="submit" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          className="login-email"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login-pas"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="login-btn">Login</button>
        <p className="login-text">Don`t have an account? </p>
        <Link className="login-link" to="/register">
          Register
        </Link>
      </form>
    </section>
  );
};

export default Login;
