import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { AuthContext } from "../../contexts/authContext";
import { toast } from "react-toastify";
import * as Yup from "yup";
import * as catalogServices from "../../services/catalogService";
import "./Edit.css";

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

const Edit = () => {
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
  // const [currentItem, setCurrentItem] = useState({});
  const { itemId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    catalogServices.getItemById(itemId).then((result) => {
      setItem(result);
    });
  }, []);

  //TODO Add form validation

  const onSubmit = (values) => {
    const itemData = values;
    catalogServices
      .editItem(itemId, itemData, user.accessToken)
      .then((result) => {
        if(result.message){
          toast.error(result.message);
        }else {
          toast.success(`${itemData.name} successfully edited` );
          navigate(`/details/${itemId}`);
        }
      })
  };

  return (
    <section className="edit-section">
      <h3 className="edit-title">Edit</h3>
      <Formik
        initialValues={{
          name: item.name || "",
          description: item.description || "",
          location: item.location || "",
          tel: item.tel || "",
          price: item.price || 0,
          img: item.img || "",
        }}
        validationSchema={CreateSchema}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, isValid, dirty }) => (
          <Form className="edit-form">
            <label htmlFor="name">Name/Model of item:</label>
            <Field
              type="text"
              name="name"
              placeholder="Enter item name."
              className="edit-name"
            />
            {errors.name && touched.name ? (
              <p className="alert">{errors.name}</p>
            ) : null}
            <label htmlFor="description">Description:</label>
            <Field as='textarea'
              type="text"
              name="description"
              className="edit-desc"
              placeholder="Please enter description"
            ></Field>
            {errors.description && touched.description ? (
              <p className="alert">{errors.description}</p>
            ) : null}
            <label>Location:</label>
            <Field
              type="text"
              name="location"
              className="edit-location"
              placeholder="Please enter location."
            />
            {errors.location && touched.location ? (
              <p className="alert">{errors.location}</p>
            ) : null}
            <label>Telephone:</label>
            <Field
              type="text"
              name="tel"
              className="edit-tel"
              placeholder="Enter your Tel number"
            />
            <label htmlFor="price">Price:</label>
            <Field
              type="number"
              name="price"
              placeholder="Price of your item"
              className="edit-price"
            />
            {errors.price && touched.price ? (
              <p className="alert">{errors.price}</p>
            ) : null}
            <label htmlFor="image">Image:</label>
            <Field
              type="text"
              name="img"
              placeholder="Link to image of the item"
              className="edit-image"
            />
            <div className="edit-btn-wrapper">
              <Link className="edit-cancel" to={`/details/${item._id}`}>
                Cancel
              </Link>
              <button disabled={!isValid && dirty} type="submit" className={!(isValid) ? 'inactive' : 'edit-btn'}>
                Edit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
    // <section className="edit-section">
    //   <h3 className="edit-title">Edit</h3>
    //   <form className="edit-form" onSubmit={onSubmit}>
    //     <label htmlFor="name">Name/Model of item:</label>
    //     <Field
    //       type="text"
    //       name="name"
    //       placeholder="Enter item name."
    //       className="edit-name"
    //       defaultValue={currentItem.name}
    //       required
    //     ></Field>
    //     <label htmlFor="description">Description:</label>
    //     <textarea
    //       type="text"
    //       name="description"
    //       className="edit-desc"
    //       placeholder="Please enter description"
    //       defaultValue={currentItem.description}
    //       required
    //     ></textarea>
    //     <label>Location:</label>
    //     <Field
    //       type="text"
    //       name="location"
    //       className="edit-location"
    //       placeholder="Please enter location."
    //       defaultValue={currentItem.location}
    //       required
    //     ></Field>
    //     <label>Telephone:</label>
    //     <Field
    //       type="number"
    //       name="tel"
    //       className="edit-tel"
    //       placeholder="Enter your Tel number"
    //       value={currentItem.tel}
    //     ></Field>
    //     <label htmlFor="price">Price:</label>
    //     <Field
    //       type="number"
    //       name="price"
    //       placeholder="Price of your item"
    //       className="edit-price"
    //       defaultValue={currentItem.price}
    //       min={0}
    //     ></Field>
    //     <label htmlFor="image">Image:</label>
    //     <Field
    //       type="text"
    //       name="img"
    //       placeholder="Link to image of the item"
    //       className="edit-image"
    //       defaultValue={currentItem.img}
    //       required
    //     ></Field>
    //     <div className="edit-btn-wrapper">
    //       <Link className="edit-cancel" to={`/details/${currentItem._id}`}>
    //         Cancel
    //       </Link>
    //       <button className="edit-btn">Edit</button>
    //     </div>
    //   </form>
    // </section>
  );
};

export default Edit;
