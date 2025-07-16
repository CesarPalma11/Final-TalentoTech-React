import React from "react";
import { Navigate } from "react-router-dom";

const RutaPrivadaAdmin = ({ children, user }) => {
  if (!user || user.rol !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default RutaPrivadaAdmin;
