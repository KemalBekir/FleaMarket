import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import * as CatalogServices from "../../services/catalogService";
import { toast } from "react-toastify";
import Spinner from "../Common/Spinner/Spinner";
import "./Details.css";
import { ItemContext } from "../../contexts/itemContext";

const Details = () => {
  const [isLoading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  const { user } = useContext(AuthContext);
  const { itemId } = useParams();
  const navigate = useNavigate();
  const { removeItem } = useContext(ItemContext);

  const deleteHandler = () => {
    const confirm = window.confirm(
      `Are you sure you wante to delete this item ${item.name}`
    );
    if (confirm) {
      CatalogServices.deleteItem(itemId, user.accessToken);
      navigate("/catalog");
      toast.success(`${item.name} successfully deleted`);
    } else {
      navigate(`/details/${itemId}`);
    }
  };

  useEffect(() => {
    CatalogServices.getItemById(itemId).then((result) => {
      setItem(result);
      setLoading(false);
    });
  }, [itemId]);
  return (
    <section className="details-section">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="details-container">
          <div className="details-img-container">
            <img
              className="details-img"
              src={item.img}
              alt={item.description}
            ></img>
          </div>
          <div className="details-info-container">
            <h2 className="details-title">{item.name}</h2>
            <ul className="details-info-list">
              <li className="details-info-item">
                <span className="details-info-accent">Description: </span>
                <p>{item.description}</p>
              </li>
              <li className="details-info-item">
                <p>
                  <span className="details-info-accent">Location: </span>
                  {item.location}
                </p>
              </li>
              <li className="details-info-item">
                {item.tel ? ( <p>
                  <span className="details-info-accent">Tel: </span>
                  {item.tel}
                </p>) : null }
               
              </li>
              <li className="details-info-item">
                {item.price || item.price !== 0 ? (
                  <p>
                    <span className="details-info-accent">Price: </span>
                    {item.price}
                  </p>
                ) : (
                  <p>
                    <span className="details-info-accent">Price: </span>Free
                  </p>
                )}
              </li>
            </ul>
          </div>
          {user._id === item.owner._id ? (
            <div className="details-btn-wrapper">
              <Link
                className="details-btn-edit"
                to={`/details/${item._id}/edit`}
              >
                Edit
              </Link>
              <button onClick={deleteHandler} className="details-btn-delete">
                Delete
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </section>
  );
};

export default Details;
