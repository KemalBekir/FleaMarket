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
        <h1 className="home-hero-title">Welcome</h1>
        <p className="home-hero-desc">Bring your unused items back to life.</p>
      </div>
        <h2 className="home-list-title" alt="Latest listings">Latest Listings</h2>
      <div className="home-list-container">
        {items.map((x) => (
          <HomeCard key={x._id} item={x} />
        ))}
      </div>
    </section>
  );
};

export default Home;
