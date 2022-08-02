import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <section className="register-section">
      <h3 className="register-title">Register</h3>
      <form className="register-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your Username"
          className="register-user"
          required
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          className="register-email"
          placeholder="Enter your Email"
          required
        ></input>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          className="register-pas"
          placeholder="Enter your Password"
          required
        ></input>
        <label>Repeat-Password:</label>
        <input
          type="rePass"
          name="rePass"
          className="register-pas"
          placeholder="Repeat your Password"
          required
        ></input>
        <label htmlFor="tel">Tel:</label>
        <input
          type="number"
          name="tel"
          placeholder="Telephone Number"
          className="register-tel"
          defaultValue={""}
        ></input>
        <button className="register-btn">Register</button>
        <p className="register-text">Already have account? </p>
        <Link className="register-link" to="/login">
          Login
        </Link>
      </form>
    </section>
  );
};

export default Register;
