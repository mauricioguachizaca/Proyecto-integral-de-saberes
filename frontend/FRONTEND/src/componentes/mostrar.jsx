import React, { useEffect } from 'react';
import CharComponent from './Grafica/ChartComponent';
import Pastel from './Grafica/Pastel';
import { useConsumo } from '../context/ConsumoContext';

function Mostrar() {
  const { dispositivoMasConsumo, consumoTotal } = useConsumo();

  useEffect(() => {
    console.log('dispositivoMasConsumo:', dispositivoMasConsumo);
    console.log('consumoTotal:', consumoTotal);
  }, [dispositivoMasConsumo, consumoTotal]);

  // Verifica si los datos están cargando
  const isLoading = dispositivoMasConsumo === null || consumoTotal === null;

  return (
    <div className="flex flex-col items-center justify-center mb-16">
      <div className="mb-4">Mis gráficas</div>
      <div className="flex flex-col items-center mb-8 h-60">
        <CharComponent />
        <Pastel height={200} />
      </div>
      <div className="bg-gray-100 mt-44 p-8 rounded-lg text-center">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <div>
            <p>Mi dispositivo que más consume es: {dispositivoMasConsumo.nombreDispositivo}</p>
            <p>El consumo total de energía al mes es: {consumoTotal} W</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mostrar;