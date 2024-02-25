import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import EnhancedTable from './EnhancedTableHead.jsx';

function Medidor() {
  const { cerrar } = useAuth();

  return (
    <div className="bg-blue-gray-50 flex flex-col min-h-screen">
      <nav className={`bg-[#478b6d] p-6 flex flex-col sm:flex-row items-center justify-between fixed w-full z-50 shadow-xl`}>
        <div className="flex items-center mb-1 sm:ml-4">
          <Link to="/" className="text-white font-extrabold text-2xl">CLIK WED</Link>
        </div>
        <div className="text-center flex flex-wrap items-center justify-center space-x-4">
          <Link to="/perfil" className="text-white transition duration-75 hover:font-bold hover:shadow-md">Editar mi perfil</Link>
          <span className="text-white">|</span>
          <Link to="/" onClick={() => { cerrar() }} className="text-white transition duration-75 hover:font-bold hover:shadow-md">Cerrar sesión</Link>
        </div>
      </nav>

      <div className="flex justify-between items-center ml-6 mt-24 mb-4 mr-6"> 
        <h1 className="text-2xl">Mis dispositivos</h1>
        <div className="flex space-x-4"> {/* Contenedor para los botones */}
          <button className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-600">
            <Link to="/agregarmedidor">Agregar dispositivo</Link>
          </button>
          <button className="bg-[#a2e3f9] text-black py-2 px-4 rounded hover:bg-[#53ccf1]">
            <Link to="/mostrar">Calcular mi consumo</Link>
          </button>
        </div>
      </div>
      <div className="flex-grow mx-6 my-2">
        <EnhancedTable />
      </div>
    </div>
  );
}

export default Medidor;

