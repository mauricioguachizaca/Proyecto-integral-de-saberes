import React, { createContext, useState, useContext, useEffect } from 'react';
import { calculo, mayor } from '../api/consumo';

const ConsumoContext = createContext();

export const useConsumo = () => {
  const context = useContext(ConsumoContext);

  if (!context) {
    throw new Error("useComsumo must be used");
  }
  return context;
};

export const ConsumoProvider = ({ children }) => {
  const [dispositivoMasConsumo, setDispositivoMasConsumo] = useState(null);
  const [consumoTotal, setConsumoTotal] = useState(null);

  const fetchDispositivoMasConsumo = async () => {
    try {
      const response = await mayor();
      console.log('Dispositivo con mayor consumo:', response.data);
      setDispositivoMasConsumo(response.data);
    } catch (error) {
      console.error('Error al obtener el dispositivo que más consume:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await calculo();
      console.log('Datos de consumo total:', response.data.consumoTotalUsuario);
      setConsumoTotal(response.data.consumoTotalUsuario);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  useEffect(() => {
    // Antes de hacer la nueva consulta, limpiar los datos existentes
    setDispositivoMasConsumo(null);
    setConsumoTotal(null);

    // Realizar la consulta para obtener el dispositivo con mayor consumo
    fetchDispositivoMasConsumo();

    // Realizar la consulta para obtener el consumo total
    fetchData();
  }, []);

  return (
    <ConsumoContext.Provider value={{ dispositivoMasConsumo, consumoTotal }}>
      {children}
    </ConsumoContext.Provider>
  );
};

