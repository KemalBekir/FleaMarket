import { useContext, useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext'
import * as catalogServices from '../../services/catalogService'
import './Edit.css'

const Edit = () => {
  const [currentItem, setCurrentItem] = useState({});
  const { itemId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    catalogServices.getItemById(itemId)
    .then(result => {
      setCurrentItem(result);
    })
  },[]);

  //TODO Add form validation

  const onSubmit = (e) => {
    e.preventDefault();

    const itemData = Object.fromEntries(new FormData(e.target));

  catalogServices.editItem(itemId, itemData , user.accessToken)
    .then(result => {
      navigate(`/details/${itemId}`);
    }).catch(err => {
      console.error(err.message);
    })
  };

  return (
    <section className="edit-section">
      <h3 className="edit-title">Edit</h3>
      <form className="edit-form" onSubmit={onSubmit}>
        <label htmlFor="name">Name/Model of item:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter item name."
          className="edit-name"
          defaultValue={currentItem.name}
          required
        ></input>
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          name="description"
          className="edit-desc"
          placeholder="Please enter description"
          defaultValue={currentItem.description}
          required
        ></textarea>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          className="edit-location"
          placeholder="Please enter location."
          defaultValue={currentItem.location}
          required
        ></input>
        <label>Telephone:</label>
        <input
          type="number"
          name="tel"
          className="edit-tel"
          placeholder="Enter your Tel number"
          value={currentItem.tel}
        ></input>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          placeholder="Price of your item"
          className="edit-price"
          defaultValue={currentItem.price}
          min={0}
        ></input>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="img"
          placeholder="Link to image of the item"
          className="edit-image"
          defaultValue={currentItem.img}
          required
        ></input>
        <div className="edit-btn-wrapper">
          <Link className="edit-cancel" to="/catalog">
            Cancel
          </Link>
          <button className="edit-btn">Edit</button>
        </div>
      </form>
    </section>
  )
}

export default Edit