import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Inicio } from './componentes/inicio';
import  Login  from './componentes/login';
import  Registro  from './componentes/registro.jsx';
import Agregarmedidor from './componentes/agregarmedidor.jsx';
import { Informacion } from './componentes/informacion';
import  Medidor  from './componentes/medidor.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Rutasprotegidas from './rutasprotegidas.jsx';

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

          <Route element={<Rutasprotegidas/>}>
          <Route path="/medidor" element={<Medidor />} />
          <Route path='/agregarmedidor' element={<Agregarmedidor/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
     </AuthProvider>
  );
}

export default App;
