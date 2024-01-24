import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Ajusta la ruta según tu estructura

const ProtectedRoute = ({ element, ...rest }) => {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? (
    // Usamos Routes como contenedor para Route
    <Routes>
      {/* Usamos Route dentro de Routes */}
      <Route {...rest} element={element} />
    </Routes>
  ) : (
    <Navigate to="/iniciar" />
  );
};

export default ProtectedRoute;
