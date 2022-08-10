import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import * as catalogServices from "../../services/catalogService";
import "./Create.css";


const CreateSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Item name must contain atleast 4 characters")
    .required("Item name is required"),
  description: Yup.string(),
  location: Yup.string()
    .required("Location is required")
    .min(4, "Location must be atleast 4 characters long"),
  tel: Yup.string(),
  price: Yup.number().default(0).min(0, "Price must be positive number"),
  img: Yup.string(),
});

const Create = () => {
  const [item, setItem] = useState({
    name: "",
    description: "",
    location: "",
    tel: "",
    price: 0,
    img: "",
  });
  const [errMsg, setErrMsg] = useState({
    message: "",
  });
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const itemData = values;

    catalogServices
      .createItem(itemData, user.accessToken)
      .then((result) => {
        navigate("/catalog");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="create-section">
      <h3 className="create-title">Create</h3>
      <Formik
        initialValues={{ ...item }}
        validationSchema={CreateSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, isValid, dirty }) => (
          <Form className="create-form">
            <label htmlFor="name">Name/Model of item:</label>
            <Field
              type="text"
              name="name"
              placeholder="Enter item name."
              className="create-name"
            />
            {errors.name && touched.name ? (
              <p className="alert">{errors.name}</p>
            ) : null}
            <label htmlFor="description">Description:</label>
            <textarea
              type="text"
              name="description"
              className="create-desc"
              placeholder="Please enter description"
            ></textarea>
            <label htmlFor="location">Location:</label>
            <Field
              type="text"
              name="location"
              className="create-location"
              placeholder="Please enter location."
            />
            {errors.location && touched.location ? (
              <p className="alert">{errors.location}</p>
            ) : null}
            <label>Telephone:</label>
            <Field
              type="number"
              name="tel"
              className="create-tel"
              placeholder="Enter your Tel number"
            ></Field>
            <label htmlFor="price">Price:</label>
            <Field
              type="number"
              name="price"
              placeholder="Price of your item"
              className="create-price"
            />
            {errors.price && touched.price ? (
              <p className="alert">{errors.price}</p>
            ) : null}
            <label htmlFor="img">Image:</label>
            <Field
              type="text"
              name="img"
              placeholder="Link to image of the item"
              className="create-image" 
            />
            <div className="create-btn-wrapper">
              <Link className="create-cancel" to="/catalog">
                Cancel
              </Link>
              <button
                disabled={!(isValid && dirty)}
                type="submit"
                className="create-btn"
              >
                Create
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
    // <section className="create-section">
    //   <h3 className="create-title">Create</h3>
    //   <form className="create-form" onSubmit={onSubmit}>
    //     <label htmlFor="name">Name/Model of item:</label>
    //     <Field
    //       type="text"
    //       name="name"
    //       placeholder="Enter item name."
    //       className="create-name"
    //       required
    //     ></Field>
    //     <label htmlFor="description">Description:</label>
    //     <textarea
    //       type="text"
    //       name="description"
    //       className="create-desc"
    //       placeholder="Please enter description"
    //       required
    //     ></textarea>
    //     <label htmlFor="location">Location:</label>
    //     <Field
    //       type="text"
    //       name="location"
    //       className="create-location"
    //       placeholder="Please enter location."
    //       required
    //     ></Field>
    //     <label>Telephone:</label>
    //     <Field
    //       type="number"
    //       name="tel"
    //       className="create-tel"
    //       placeholder="Enter your Tel number"
    //       defaultValue={""}
    //     ></Field>
    //     <label htmlFor="price">Price:</label>
    //     <Field
    //       type="number"
    //       name="price"
    //       placeholder="Price of your item"
    //       className="create-price"
    //       min={0}
    //       defaultValue={0}
    //     ></Field>
    //     <label htmlFor="img">Image:</label>
    //     <Field
    //       type="text"
    //       name="img"
    //       placeholder="Link to image of the item"
    //       className="create-image"
    //       required
    //     ></Field>
    //     <div className="create-btn-wrapper">
    //       <Link className="create-cancel" to="/catalog">
    //         Cancel
    //       </Link>
    //       <button className="create-btn">Create</button>
    //     </div>
    //   </form>
    // </section>
  );
};

export default Create;
