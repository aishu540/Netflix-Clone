import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("token")
  return isLogin ? children : <Navigate to="/dashboard" />;
};

export default ProtectedRoute;
