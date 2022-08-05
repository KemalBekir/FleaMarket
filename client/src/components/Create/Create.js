import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import * as catalogServices from "../../services/catalogService";
import Catalog from "../Catalog/Catalog";
import "./Create.css";

const Create = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault(e);

    const itemData = Object.fromEntries(new FormData(e.target));

    catalogServices.createItem(itemData, user.accessToken)
    .then(result => {
      navigate('/catalog');
    });
  }

  return (
    <section className="create-section">
      <h3 className="create-title">Create</h3>
      <form className="create-form" onSubmit={onSubmit}>
        <label htmlFor="name">Name/Model of item:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter item name."
          className="create-name"
          required
        ></input>
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          name="description"
          className="create-desc"
          placeholder="Please enter description"
          required
        ></textarea>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          className="create-location"
          placeholder="Please enter location."
          required
        ></input>
        <label>Telephone:</label>
        <input
          type="number"
          name="tel"
          className="create-tel"
          placeholder="Enter your Tel number"
          defaultValue={""}
        ></input>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          placeholder="Price of your item"
          className="create-price"
          min={0}
          defaultValue={0}
        ></input>
        <label htmlFor="img">Image:</label>
        <input
          type="text"
          name="img"
          placeholder="Link to image of the item"
          className="create-image"
          required
        ></input>
        <div className="create-btn-wrapper">
          <Link className="create-cancel" to="/catalog">
            Cancel
          </Link>
          <button className="create-btn">Create</button>
        </div>
      </form>
    </section>
  );
};

export default Create;
