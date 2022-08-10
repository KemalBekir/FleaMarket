import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as catalogService from "../../services/catalogService";
import Spinner from "../Common/Spinner/Spinner";
import { HomeCard } from "../HomeCard/HomeCard";
import "./Search.css";

const Search = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isSearching, setSearching] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const query = searchParams.get("name") || "";


  const handleSearchTerm = (e) => {
    e.preventDefault();
    const name = e.target.value;

    if (name) {
      setSearchParams({ name });
      setSearchTerm(name);
    } else {
      setSearchParams({});
      setSearchTerm("");
      setSearching(false);
    }
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (query) {
      setTimeout(() => {
        catalogService.search(searchTerm).then((result) => setItems(result));
        setSearching(true);
      }, 600);
      setLoading(false);
    } else if (searchTerm.length === 0) {
      catalogService.getAll().then((result) => setItems(result));
    }
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <form
          className="search-search-container"
          method="get"
          onSubmit={submitSearch}
        >
          <input
            className="search-search"
            type="text"
            placeholder="Search by Item name or Location"
            name="text"
            value={searchTerm}
            onChange={handleSearchTerm}
          ></input>
          <button className="search-search-btn">Search</button>
        </form>
        {isSearching ? 
          (isLoading ? (
            <Spinner />
          ) : (
            <>
              <h2 className="search-title">Search Results</h2>
              {items.length > 0 ? (
                items.map((x) => <HomeCard key={x._id} item={x} />)
              ) : (
                <h3 style={{ color: "white" }}>No results</h3>
              )}
            </>
          ))
        : (
          ''
        )}
      </div>
    </section>
  );
};

export default Search;
