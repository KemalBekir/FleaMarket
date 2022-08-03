import React from 'react'
import { Link } from 'react-router-dom'
import './Edit.css'

const Edit = () => {
  return (
    <section className="edit-section">
      <h3 className="edit-title">Edit</h3>
      <form className="edit-form">
        <label htmlFor="name">Name/Model of item:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter item name."
          className="edit-name"
          required
        ></input>
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          name="description"
          className="edit-desc"
          placeholder="Please enter description"
          required
        ></textarea>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          className="edit-location"
          placeholder="Please enter location."
          required
        ></input>
        <label>Telephone:</label>
        <input
          type="number"
          name="tel"
          className="edit-tel"
          placeholder="Enter your Tel number"
          defaultValue={""}
        ></input>
        <label htmlFor="tel">Price:</label>
        <input
          type="number"
          name="price"
          placeholder="Telephone Number"
          className="edit-price"
          min={0}
          defaultValue={0}
        ></input>
        <label htmlFor="tel">Image:</label>
        <input
          type="text"
          name="img"
          placeholder="Link to image of the item"
          className="edit-image"
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