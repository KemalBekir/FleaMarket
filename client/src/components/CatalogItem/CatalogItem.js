import { Link } from "react-router-dom";
import "./CatalogItem.css";

const CatalogItem = ({ item }) => {
  return (
      <div className="catalog-list-item-container">
        <div className="catalog-card">
          <img className="catalog-card-img" src={item.img} alt="" />
        </div>
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <p>{item.updatedAt}</p>
        <Link to={`/details/${item._id}`}>Details</Link>
      </div>
  );
};

export default CatalogItem;
