import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Inicio } from './componentes/inicio';
import { Login } from './componentes/login';
import { Registro } from './componentes/registro';
import { Informacion } from './componentes/informacion';
import { Medidor } from './componentes/medidor';
import './App.css';

// Crear un contexto para gestionar el estado de autenticación
const AuthContext = React.createContext();

// Un componente de proveedor que gestionará el estado de autenticación
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

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Un componente de ruta protegida que redirige a la página de inicio de sesión si el usuario no está autenticado
const ProtectedRoute = ({ element, ...rest }) => {
  const { authenticated } = React.useContext(AuthContext);

  return authenticated ? element : <Navigate to="/iniciar sesion" />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/iniciar sesion" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route
            path="/medidor"
            element={<ProtectedRoute element={<Medidor />} />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
