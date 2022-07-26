import { Link } from "react-router-dom";
import "./CatalogItem.css";

const CatalogItem = ({ item }) => {
  return (
    <li>
      <div className="image-container">
        <img className="image" src={item.img} alt="" />
      </div>
      <h5>{item.name}</h5>
      <p>{item.description}</p>
      <p>{item.updatedAt}</p>
      <Link to={`/details/${item._id}`}>Details</Link>
    </li>
  );
};

export default CatalogItem;
