import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = sessionStorage.getItem("token")
  return isLogin ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
