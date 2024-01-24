import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    // Lógica para iniciar sesión
    setAuthenticated(true);
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setAuthenticated(false);
  };

  const value = {
    authenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Exporta la función useAuth
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
