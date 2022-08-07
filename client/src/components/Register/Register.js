import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import * as userService from "../../services/userService";
import "./Register.css";

//TODO add form validation

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    rePass: "",
    tel: "",
  });
  const [errMsg, setErrMsg] = useState({
    message: ''
  })
  const [isValid,setValid] = useState(true)

  const { userLogin } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, email, password, rePass, tel } = Object.fromEntries(
        new FormData(e.target));

        if(password !== rePass){
          setErrMsg('Passwords must match');
          setValid(false);
        }

        userService.registerUser({username,email,password,tel}).then(result => {
          console.log(result);
        })

    } catch (err) {
      setErrMsg(err.message);
    }
  };

  return (
    <section className="register-section">
      <h3 className="register-title">Register</h3>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your Username"
          className="register-user"
          required
        ></input>
        {!isValid ? <p>{errMsg.message}</p> : null}
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
          type="password"
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
