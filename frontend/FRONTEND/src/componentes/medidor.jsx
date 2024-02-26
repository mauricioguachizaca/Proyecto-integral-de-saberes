import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import EnhancedTable from './EnhancedTableHead.jsx';

function Medidor() {
  const { cerrar } = useAuth();

  return (
    <div className="bg-blue-gray-50 dark:bg-[#1c201e] flex flex-col min-h-screen">
      <nav className={`bg-[#478b6d] dark:bg-[#17301a] p-6 flex flex-col sm:flex-row items-center justify-between fixed w-full z-50 shadow-xl`}>
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
        <h1 className="text-2xl dark:text-white">Mis dispositivos </h1>
        <div className="flex space-x-4"> {/* Contenedor para los botones */}
          <button className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-600">
            <Link to="/agregarmedidor">Agregar dispositivo</Link>
          </button>
          <button className="bg-[#3f51b5] dark:bg-[#1e2f50] text-white dark:text-white py-2 px-4 rounded hover:bg-[#3f51b5] ">
            <Link to="/mostrar">Calcular mi consumo</Link>
          </button>
        </div>
      </div>
      <div className="flex-grow mx-6 my-2">
      <EnhancedTable modoNoche={true} />
      </div>
    </div>
  );
}

export default Medidor;
