import React from "react";
import { useAllSelectors } from "../../hooks/useAllSelectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo = "/auth" }) => {
  const { isLoggedIn } = useAllSelectors();
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
