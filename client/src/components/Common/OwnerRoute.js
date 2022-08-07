import { useState } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import * as catalogServices from "../../services/catalogService";

const OwnerRoute = ({ children }) => {
  const { user, isAuthenticated } = useAuthContext();
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  if (!itemId) return;
  catalogServices.getItemById(itemId).then((result) => setItem(result));

  if(isAuthenticated && user._id !== item.owner){
    return <Navigate to='/catalog' replace />
  }

  return children ? children : <Outlet />;
};

export default OwnerRoute;
