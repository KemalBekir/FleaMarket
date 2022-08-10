import { useContext, useEffect, useState } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import { ItemContext } from "../../contexts/itemContext";

const OwnerRoute = ({ children }) => {
  const { selectItem } = useContext(ItemContext);
  const { user, isAuthenticated } = useAuthContext();
  const { itemId } = useParams();

  const currentItem = selectItem(itemId);
  if (isAuthenticated && user._id !== currentItem.owner) {
    return <Navigate to="/catalog" replace />;
  } else if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};

export default OwnerRoute;
