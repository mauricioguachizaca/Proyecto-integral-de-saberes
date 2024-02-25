import React, { useEffect } from 'react';
import CharComponent from './Grafica/ChartComponent';
import Pastel from './Grafica/Pastel';
import { useConsumo } from '../context/ConsumoContext';
import { Link } from 'react-router-dom';

function Mostrar() {
  const { dispositivoMasConsumo, consumoTotal } = useConsumo();

  useEffect(() => {
    console.log('dispositivoMasConsumo:', dispositivoMasConsumo);
    console.log('consumoTotal:', consumoTotal);
  }, [dispositivoMasConsumo, consumoTotal]);

  // Verifica si los datos están cargando
  const isLoading = dispositivoMasConsumo === null || consumoTotal === null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br bg-[#a2e3f9]  text-black">
      <div className="text-5xl font-bold mb-8 text-center">¡Tus Datos Energéticos!</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center p-4 bg-white opacity-70 rounded-xl backdrop-blur-md shadow-md">
          <div className="text-3xl font-bold mb-4">Visualización Gráfica</div>
          <CharComponent />
        </div>
        <div className="flex flex-col items-center p-4 bg-white opacity-70 rounded-xl backdrop-blur-md shadow-md">
          <div className="text-3xl font-bold mb-4">Distribución de Consumo</div>
          <Pastel height={200} />
        </div>
      </div>
      <div className="bg-white opacity-70 p-8 rounded-lg text-center mt-8 max-w-md backdrop-blur-md">
        {isLoading ? (
          <p className="text-lg">Cargando...</p>
        ) : (
          <div>
            <p className="text-xl mb-4">Tu dispositivo que más consume es: {dispositivoMasConsumo.nombreDispositivo}</p>
            <p className="text-xl">El consumo total de energía al mes es: {consumoTotal} W</p>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="bg-[#478b6d] text-white py-2 px-4 rounded hover:bg-[#5d8dee]"
      >
        <Link to="/medidor">Regresar</Link>
      </button>
    </div>
  );
}

export default Mostrar;
