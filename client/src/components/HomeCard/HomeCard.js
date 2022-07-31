import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "./HomeCard.css";

export const HomeCard = ({ item }) => {
  return (
    <>
      <div className="home-card-container">
        <img className="home-card-img" src={item.img} alt="" />
        <div className="home-card">
          <h5 className="home-card-title">{item.name.length > 10 ? item.name.substring(0,10) : item.name}</h5>
          <p className="home-card-desc">{item.description.length > 15 ? item.description.substring(0, 10) : item.description}</p>
          <p className="home-card-date">
            <Moment format="MMMM Do YY, h:mm a">{item.updatedAt}</Moment>
          </p>
        </div>
          <Link className="home-card-link" to={`/details/${item._id}`}>
            Details
          </Link>
      </div>
    </>
  );
};
