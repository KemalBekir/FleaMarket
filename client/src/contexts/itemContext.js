import { createContext, useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as catalogService from "../services/catalogService";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    catalogService.getAll().then((result) => setItems(result));
    console.log('repeat');
  }, []);


  const selectItem = (itemId) => {
    return items.find(x => x._id === itemId ) || {};
  };

  return (
    <ItemContext.Provider value ={{
        items,
        selectItem
    }}>
        {children}
    </ItemContext.Provider>
  );
};
