import { createContext, useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as catalogService from "../services/catalogService";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    catalogService.getAll().then((result) => setItems(result));
    setLoading(false);
  }, []);


  const selectItem = (itemId) => {
    return items.find(x => x._id === itemId ) || {};
  };

  const removeItem = (itemId) => {
    return items.filter(x => x._id !== itemId);
  };

  return (
    <ItemContext.Provider value ={{
        items,
        selectItem,
        removeItem,
        isLoading
    }}>
        {children}
    </ItemContext.Provider>
  );
};
