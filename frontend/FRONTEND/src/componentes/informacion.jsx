import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FlujoTrabajo from './imagenes/FlujoDeTrabajoPis.png';
import DiagramaClases from './imagenes/Diagrama2.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Informacion = ({ modoNoche }) => {
  const [flujoAmpliada, setFlujoAmpliada] = useState(false);
  const [diagramaAmpliada, setDiagramaAmpliada] = useState(false);

  const toggleFlujoAmpliada = () => {
    setFlujoAmpliada(!flujoAmpliada);
  };

  const toggleDiagramaAmpliada = () => {
    setDiagramaAmpliada(!diagramaAmpliada);
  };

  return (
    <div className={`min-h-screen flex flex-col ${modoNoche ? 'bg-[#1b1a1b]' : 'bg-gray-200'}`}>
      <nav className={`${modoNoche ? 'bg-[#17301a]' : 'bg-[#478b6d]'} p-6 flex flex-col sm:flex-row items-center justify-between fixed w-full z-50 shadow-xl`}>
        <div className="flex items-center mb-1 sm:ml-4">
          <Link to="#bienvenida" className="text-white font-extrabold text-2xl">Watt Control</Link>
        </div>
        <div className="text-center flex flex-wrap items-center justify-center space-x-4">
          <a href="/" className="text-white transition duration-75 hover:font-bold hover:shadow-md">Inicio</a>
          <span className="text-white">|</span>
          <a href="/informacion" className="text-white transition duration-75 hover:font-bold hover:shadow-md">Información</a>
          <span className="text-white">|</span>
          <a href="https://github.com/mauricioguachizaca/Proyecto-integral-de-saberes.github.io" target="_blank" rel="noopener noreferrer">
            <GitHubIcon style={{ color: '#ffffff' }} fontSize="large" className="ml-2" />
          </a>
        </div>
      </nav>
      <div className="mt-20 flex flex-col items-center">
        <div className={`w-full max-w-screen-xl p-6 text-center rounded-md shadow-md relative ${modoNoche ? 'bg-[#1c201e]' : 'bg-[#dadacbb9]'}`}>
          <div className="mt-4">
            <div className="mb-4">
              <h1 className={`text-3xl font-bold ${modoNoche ? 'text-white' : 'text-black'}`}>Información Del Proyecto</h1>
            </div>
            <h2 className={`text-xl font-bold mb-2 underline ${modoNoche ? 'text-white' : 'text-black'}`}>Flujo de Trabajo</h2>
            <p className="mb-4"></p>
            {flujoAmpliada && (
              <div
                className={`fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden flex items-center justify-center ${modoNoche ? 'bg-[#1b1a1b]' : 'bg-gray-200'}`}
                onClick={toggleFlujoAmpliada}
              >
                <img
                  src={FlujoTrabajo}
                  alt="Descripción de la imagen"
                  className="max-h-full max-w-full cursor-pointer"
                />
              </div>
            )}
            <img
              src={FlujoTrabajo}
              alt="Descripción de la imagen"
              className={`w-full h-auto rounded-md cursor-pointer ${flujoAmpliada ? 'filter brightness-50' : ''} mb-4 mx-auto`}
              style={{ maxWidth: 'calc(100% + 20px)' }}
              onClick={toggleFlujoAmpliada}
            />

            {diagramaAmpliada && (
              <div
                className={`fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden flex items-center justify-center ${modoNoche ? 'bg-[#1b1a1b]' : 'bg-gray-200'}`}
                onClick={toggleDiagramaAmpliada}
              >
                <img
                  src={DiagramaClases}
                  alt="Descripción de la nueva imagen"
                  className="max-h-full max-w-full cursor-pointer"
                />
              </div>
            )}
            <h2 className={`text-xl font-bold mb-2 underline ${modoNoche ? 'text-white' : 'text-black'}`}>Diagrama de clases</h2>
            <img
              src={DiagramaClases}
              alt="Descripción de la nueva imagen"
              className={`w-full h-auto rounded-md cursor-pointer ${diagramaAmpliada ? 'filter brightness-50' : ''} mb-4 mx-auto`}
              style={{ maxWidth: 'calc(100% + 20px)' }}
              onClick={toggleDiagramaAmpliada}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
