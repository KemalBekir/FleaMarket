import React from "react";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
import { useState } from "react";
import { loginUser } from "../../api/User";

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
      <form type="submit" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
        <p>Don`t have an account? </p>
        <Link style={{ textDecoration: "none" }} to="/register">
          <Register />
        </Link>
      </form>
    </section>
  );
};

export default Login;
