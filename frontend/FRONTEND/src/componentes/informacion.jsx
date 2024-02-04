import React, { useState } from 'react';
import FlujoTrabajo from './imagenes/FlujoDeTrabajoPis.png';

export const Informacion = () => {
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  const toggleImagenAmpliada = () => {
    setImagenAmpliada(!imagenAmpliada);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="w-full max-w-screen-xl p-6 text-center bg-white rounded-md shadow-md relative">
        <div className="mt-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Información Del Proyecto</h1>
          </div>
          <h2 className="text-xl font-bold mb-2 underline">Flujo de Trabajo</h2>
          <p className="mb-4"></p>
          {imagenAmpliada && (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden flex items-center justify-center"
              style={{ background: 'rgba(255, 255, 255, 0.9)' }}
              onClick={toggleImagenAmpliada}
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
            className={`w-full h-auto rounded-md cursor-pointer ${imagenAmpliada ? 'filter brightness-50' : ''} mb-4 mx-auto`}
            style={{ maxWidth: 'calc(100% + 20px)' }}
            onClick={toggleImagenAmpliada}
          />
        </div>
      </div>
    </div>
  );
};
