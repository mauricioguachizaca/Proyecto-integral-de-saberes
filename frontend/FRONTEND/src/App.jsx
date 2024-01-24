import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './componentes/inicio';
import { Login } from './componentes/login';
import { Registro } from './componentes/registro';
import { Informacion } from './componentes/informacion';
import { Medidor } from './componentes/medidor';
import ProtectedRoute from './context/ProtectedRoute';
import AuthProvider from './context/AuthContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/iniciar" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/informacion" element={<Informacion />} />
          {/* Usa ProtectedRoute para las rutas protegidas */}
          <Route
            path="/medidor/*"
            element={<ProtectedRoute element={<Medidor />} />}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
