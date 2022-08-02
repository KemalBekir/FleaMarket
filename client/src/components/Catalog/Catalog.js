import React, { useEffect } from "react";
import * as catalogService from "../../services/catalogService";
import { useState } from "react";
import "./Catalog.css";
// import CatalogItem from '../CatalogItem/CatalogItem';
import { HomeCard } from "../HomeCard/HomeCard";
import Spinner from "../Common/Spinner/Spinner";

const Catalog = () => {
  // const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    catalogService.getAll().then((result) => {
      setItems(result);
      setLoading(false);
    });
  }, []);
  return (
    <section className="catalog-section">
      {/* <div className="catalog-search-container">
          <input className='catalog-search' placeholder='Search by Item name or Location' ></input>
          <button className="catalog-search-btn">Search</button>
        </div> */}
      <div className="catalog-container">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <h2 className="catalog-title">All listings</h2>
            {items.length > 0 ? (
              items.map((x) => <HomeCard key={x._id} item={x} />)
            ) : (
              <h3>No listings yet</h3>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Catalog;
