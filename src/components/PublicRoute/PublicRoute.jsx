import React from "react";
import { useAllSelectors } from "../../hooks/useAllSelectors";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, redirectTo = "/", restricted }) => {
  const { isLoggedIn } = useAllSelectors();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
