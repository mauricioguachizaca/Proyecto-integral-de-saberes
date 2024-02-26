import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Inicio } from './componentes/inicio';
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './componentes/login';
import Registro from './componentes/registro.jsx';
import Agregarmedidor from './componentes/agregarmedidor.jsx';
import { Informacion } from './componentes/informacion.jsx';
import Medidor from './componentes/medidor';
import Mostrar from './componentes/mostrar.jsx';
import Perfil from './componentes/perfil.jsx';
import Rutasprotegidas from './rutasprotegidas.jsx';


import './App.css';
import { MedidorProvider } from './context/MedidorContext.jsx';
import { ConsumoProvider } from './context/ConsumoContext.jsx';


function App() {
  const [modoNoche, setModoNoche] = useState(false);


  const toggleModoNoche = () => {
    setModoNoche(!modoNoche);
  };
    // Función para alternar entre el modo oscuro y claro
    const togglemodoNoche = () => {
      const newmodoNoche = !modoNoche;
      setmodoNoche(newmodoNoche);
     
      // Guardar el estado del modo oscuro en el almacenamiento local
      localStorage.setItem('modoNoche', newmodoNoche);
    };


  return (
    <AuthProvider>
      <MedidorProvider>
        <ConsumoProvider>
          <BrowserRouter>
            <div className={`App ${modoNoche ? 'dark' : ''}`}>
              <button onClick={toggleModoNoche} className="fixed bottom-4 right-4 bg-[#6D6E81] text-white rounded-full w-12 h-12 flex items-center justify-center">
                {modoNoche ? '🌙' : '🌞'}
              </button>
              <Routes>
                <Route path="/" element={<Inicio modoNoche={modoNoche} />} />
                <Route path="/iniciar" element={<Login modoNoche={modoNoche} />} />
                <Route path="/registro" element={<Registro modoNoche={modoNoche} />} />
                <Route path="/informacion" element={<Informacion modoNoche={modoNoche} />} />


                <Route element={<Rutasprotegidas modoNoche={modoNoche} />}>
                  <Route path="/medidor" element={<Medidor modoNoche={modoNoche} />} />
                  <Route path="/agregarmedidor" element={<Agregarmedidor modoNoche={modoNoche} />} />
                  <Route path="/agregarmedidor/:id" element={<Agregarmedidor modoNoche={modoNoche} />} />
                  <Route path="/perfil" element={<Perfil modoNoche={modoNoche} />} />
                  <Route path="/mostrar" element={<Mostrar modoNoche={modoNoche} />} />
                </Route>
              </Routes>
            </div>
          </BrowserRouter>
        </ConsumoProvider>
      </MedidorProvider>
    </AuthProvider>
  );
}


export default App;


