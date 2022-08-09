import { useEffect, useState } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import * as catalogServices from "../../services/catalogService";

const OwnerRoute = ({ children }) => {
  const { user, isAuthenticated } = useAuthContext();
  const { itemId } = useParams();
  const isEmpty = Object.keys(user).length === 0;
  if(isEmpty){
    return <Navigate to="/login" replace />;
  }
  const owner = user.myAds.includes(itemId);

  if (!owner) {
    return <Navigate to="/catalog" replace />;
  } else if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
};

export default OwnerRoute;
