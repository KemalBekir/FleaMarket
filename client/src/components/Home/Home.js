import { useState, useEffect } from "react";
import * as CatalogService from "../../services/catalogService";
import CatalogItem from "../CatalogItem/CatalogItem";
import "./Home.css";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    CatalogService.getTopFive().then((result) => {
      setItems(result);
    });
  }, []);

  return (
    <div className="top-item-container">
      <ul className="catalog-list">
        {items.map((x) => (
          <CatalogItem key={x._id} item={x} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
