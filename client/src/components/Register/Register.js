import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Formik, Form, Field, } from "formik";
import * as Yup from "yup";
import * as userService from "../../services/userService";
import "./Register.css";

//TODO finish validation and toastify notification

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Username should be at least 5 characters")
    .matches(
      /[a-zA-Z0-9]+/g,
      "Username must contain only latin letters and digits"
    )
    .required("Username is required"),
  email: Yup.string()
    .email()
    .matches(/^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/, "Email must be valid")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Password is required"),
  rePass: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
  }),
  tel: Yup.string().default(""),
});

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    rePass: "",
    tel: "",
  });
  const [errMsg, setErrMsg] = useState({
    message: "",
  });
  // const [isValid, setValid] = useState(true);

  const { userLogin } = useContext(AuthContext);

  const handleSubmit = (values) => {
    const { username, email, password, rePass, tel } = values;
    userService
      .registerUser({ username, email, password, tel })
      .then((authData) => {
        userLogin(authData);
      }).catch((error) => setErrMsg(error.message));
      
  };

  return (
    <section className="register-section">
      <h3 className="register-title">Register</h3>
      <Formik
        initialValues={{ ...user }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isValid, dirty }) => (
          <Form className="register-form">
            <label htmlFor="username">Username:</label>
            <Field
              name="username"
              placeholder="Enter your Username"
              className="register-user"
            />
            {errors.username && touched.username ? (
              <p className="alert">{errors.username}</p>
            ) : null}
            <label htmlFor="email">Email:</label>
            <Field
              name="email"
              className="register-email"
              placeholder="Enter your Email"
            />
            {errors.email && touched.email ? (
              <p className="alert">{errors.email}</p>
            ) : null}
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              className="register-pas"
              placeholder="Enter your Password"
              value={values.password}
            />
            {errors.password && touched.password ? (
              <p className="alert">{errors.password}</p>
            ) : null}
            <label>Repeat-Password:</label>
            <Field
              type="password"
              name="rePass"
              className="register-pas"
              placeholder="Repeat your Password"
              value={values.rePass}
            />
            {errors.rePass && touched.rePass ? (
              <p className="alert">{errors.rePass}</p>
            ) : null}
            <label htmlFor="tel">Tel:</label>
            <Field
              type="text"
              name="tel"
              placeholder="Telephone Number"
              className="register-tel"
            ></Field>
            <button
              type="submit"
              disabled={!(isValid && dirty)}
              className="register-btn"
            >
              Register
            </button>
            <p className="register-text">Already have account? </p>
            <Link className="register-link" to="/login">
              Login
            </Link>
          </Form>
        )}
      </Formik>
    </section>
    // <section className="register-section">
    //   <h3 className="register-title">Register</h3>
    //   <form className="register-form" onSubmit={handleSubmit}>
    //     <label htmlFor="username">Username:</label>
    //     <Field
    //       type="text"
    //       name="username"
    //       placeholder="Enter your Username"
    //       className="register-user"
    //       required
    //     ></Field>
    //     {!isValid ? <p>{errMsg.message}</p> : null}
    //     <label htmlFor="email">Email:</label>
    //     <Field
    //       type="email"
    //       name="email"
    //       className="register-email"
    //       placeholder="Enter your Email"
    //       required
    //     ></Field>
    //     <label>Password:</label>
    //     <Field
    //       type="password"
    //       name="password"
    //       className="register-pas"
    //       placeholder="Enter your Password"
    //       required
    //     ></Field>
    //     <label>Repeat-Password:</label>
    //     <Field
    //       type="password"
    //       name="rePass"
    //       className="register-pas"
    //       placeholder="Repeat your Password"
    //       required
    //     ></Field>
    //     <label htmlFor="tel">Tel:</label>
    //     <Field
    //       type="number"
    //       name="tel"
    //       placeholder="Telephone Number"
    //       className="register-tel"
    //       defaultValue={""}
    //     ></Field>
    //     <button className="register-btn">Register</button>
    //     <p className="register-text">Already have account? </p>
    //     <Link className="register-link" to="/login">
    //       Login
    //     </Link>
    //   </form>
    // </section>
  );
};

export default Register;
