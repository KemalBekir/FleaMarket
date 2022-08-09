import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/userService";
import { AuthContext } from "../../contexts/authContext";
import "./Login.css";

//TODO handle server errors

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authData = await loginUser({
        email,
        password,
      });
      userLogin(authData);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

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
