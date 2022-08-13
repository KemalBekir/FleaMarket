import React, { useEffect } from "react";
import * as catalogService from "../../services/catalogService";
import { useState } from "react";
import "./Catalog.css";
import { HomeCard } from "../HomeCard/HomeCard";
import Spinner from "../Common/Spinner/Spinner";

const Catalog = () => {
  // const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const data = () => catalogService.getAll().then((result) => {
    setItems(result);
    setLoading(false);
  });

  useEffect(() => {
    data();
  }, []);

  return (
    <section className="catalog-section">
      <div className="catalog-container">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <h2 className="catalog-title">All listings</h2>
            {items.length > 0 ? (
              items.map((x) => <HomeCard key={x._id} item={x} />)
            ) : (
              <h3 style={{ color: "white" }}>No listings currently</h3>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Catalog;
