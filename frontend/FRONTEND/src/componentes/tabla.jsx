import React, { useState, useEffect } from 'react';
import CharComponent from './tabla/ChartComponent';
import axios from '../api/axios';

function Tabla() {
  const [dispositivoMasConsumo, setDispositivoMasConsumo] = useState(null);

  useEffect(() => {
    const fetchDispositivoMasConsumo = async () => {
      try {
        const response = await axios.get('/mayorconsumo');
        setDispositivoMasConsumo(response.data);
      } catch (error) {
        console.error('Error al obtener el dispositivo que más consume:', error);
      }
    };

    fetchDispositivoMasConsumo();
  }, []);

  return (
    <div>
      <div>Tabla</div>
      <CharComponent />
      <div>
        {dispositivoMasConsumo ? (
          <p>Mi dispositivo que más consume es: {dispositivoMasConsumo.nombreDispositivo}</p>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}

export default Tabla;
