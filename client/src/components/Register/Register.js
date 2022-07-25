import React from "react";

const Register = () => {
  return (
    <section className="register-section">
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your Username"
          required
        ></input>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          required
        ></input>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          required
        ></input>
        <label htmlFor="tel">Tel:</label>
        <input type="number" name="tel" placeholder="tel" defaultValue={''}></input>
      </form>
    </section>
  );
};

export default Register;
