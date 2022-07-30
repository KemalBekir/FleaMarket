import { useState, useEffect } from "react";
import * as CatalogService from "../../services/catalogService";
import { HomeCard } from "../HomeCard/HomeCard";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    CatalogService.getTopFive().then((result) => {
      setItems(result);
    });
  }, []);

  return (
    <section className="home-section">
      <div className="home-hero">
        <h1>Flea Market </h1>
      </div>
      <div className="home-list-container">
        {items.map((x) => (
          <HomeCard key={x._id} item={x} />
        ))}
      </div>
    </section>
  );
};

export default Home;
