import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Inicio } from './componentes/inicio';
import { Login } from './componentes/login';
import { Registro } from './componentes/registro';
import { Informacion } from './componentes/informacion';
import { Medidor } from './componentes/medidor';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/iniciar" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/medidor" element={<Medidor />} />
        </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
