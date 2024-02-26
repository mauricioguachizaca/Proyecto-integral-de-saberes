import React, { useEffect } from 'react';
import CharComponent from './Grafica/ChartComponent';
import Pastel from './Grafica/Pastel';
import { useConsumo } from '../context/ConsumoContext';
import { Link } from 'react-router-dom';

function Mostrar({ modoNoche }) {
  const { dispositivoMasConsumo, consumoTotal } = useConsumo();

  useEffect(() => {
    console.log('dispositivoMasConsumo:', dispositivoMasConsumo);
    console.log('consumoTotal:', consumoTotal);
  }, [dispositivoMasConsumo, consumoTotal]);

  // Verifica si los datos están cargando
  const isLoading = dispositivoMasConsumo === null || consumoTotal === null;

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${modoNoche ? 'bg-[#1c201e] text-black' : 'bg-gradient-to-br bg-[#a2e3f9] text-black'}`}>
      <div className={`text-5xl font-bold mb-8 mt-4 text-center ${modoNoche ? 'text-white' : ''}`}>
  ¡Tus Datos Energéticos!
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className={`flex flex-col items-center p-4 rounded-xl shadow-md ${modoNoche ? 'bg-[#313f38] text-white' : 'bg-white text-black'} opacity-70 backdrop-blur-md`}>
  <div className={`text-3xl font-bold mb-4 ${modoNoche ? 'text-white' : 'text-black'}`}>Visualización Gráfica</div>

          <CharComponent />
        </div>
        <div className={`flex flex-col items-center p-4 rounded-xl shadow-md ${modoNoche ? 'bg-[#313f38] text-white' : 'bg-white text-black'} opacity-70 backdrop-blur-md`}>
       <div className={`text-3xl font-bold mb-4 ${modoNoche ? 'text-white' : 'text-black'}`}>Visualización Gráfica</div> 
          <Pastel height={200} />
        </div>
      </div>
      <div className={` opacity-70 p-8 rounded-lg text-center mt-8 max-w-md backdrop-blur-md ${modoNoche ? 'bg-[#2a4f5d] text-white' : 'bg-white text-black'}`}>
  {isLoading ? (
    <p className="text-lg">Cargando...</p>
  ) : (
    <div>
      <p className={`text-xl mb-4 ${modoNoche ? 'text-white' : 'text-black'}`}>El dispositivo que más consume es: {dispositivoMasConsumo.nombreDispositivo}</p>
      <p className={`text-xl ${modoNoche ? 'text-white' : 'text-black'}`}>El consumo total de energía al mes es: {consumoTotal} W</p>
    </div>
  )}
</div>
      <button
        type="submit"
        className={`bg-[#313f38] text-white py-2 px-4 rounded hover:bg-[#1e2f50] mt-4 mb-4 ${modoNoche ? 'bg-[#313f38] hover:bg-[#1e2f50]' : ''}`} // Agregar el margen inferior de 1cm aquí
      >
        <Link to="/medidor">Regresar</Link>
      </button>
    </div>
  );
}

export default Mostrar;
