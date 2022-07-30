import React from "react";
import { Link } from "react-router-dom";
import "./HomeCard.css";

export const HomeCard = ({ item }) => {
  return (
    <>
      <div className="home-card-container">
        <img className="home-card-img" src={item.img} alt="" />
        <div className="home-card">
          <h5>{item.name}</h5>
          <p className="home-card-desc">{item.description.substring(0, 10)}</p>
          <p>{item.updatedAt}</p>
          <Link style={{ textDecoration: "none" , }} to={`/details/${item._id}`}>
            Details
          </Link>
        </div>
      </div>
    </>
  );
};
