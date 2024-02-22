import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import EnhancedTable from './EnhancedTableHead.jsx'

function Medidor() {
  const { cerrar } = useAuth(); // Accede al contexto de autenticación y obtén el usuario


  return (
    <div className="bg-blue-gray-50 flex flex-col min-h-screen">
      {/* Muestra el nombre de usuario si está disponible */}
        <button className='bg-deep-purple-900'>
          <Link to="/" onClick={() => { cerrar() }}>Cerrar sesión</Link>
        </button>
      <div className="flex justify-between items-center px-4 mt-16">
        <h1 className="text-2xl ml-4">Mis dispositivos</h1>
        <div>
          <button className='bg-teal-700 mr-4'>Agregar un dispositivo</button>
          <button className='bg-teal-700 mr-4'>Mi último consumo</button>
        </div>
      </div>
      <div className="flex-grow mx-6 my-6">
        <EnhancedTable />
        <button className='ml-2 bg-deep-orange-500'>calcular mi consumo</button>
      </div>
    </div>
  );
}

export default Medidor;
