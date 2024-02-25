import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from '../../api/axios';

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export default function Pies() {
  const [dispositivosInfo, setDispositivosInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/dispositivos');
        setDispositivosInfo(response.data);
      } catch (error) {
        console.error('Error al obtener la información de los dispositivos:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    label: 'Cantidad de mis dispositivos',
    labels: dispositivosInfo ? dispositivosInfo.map(dispositivo => dispositivo.nombreDispositivo) : [],
    datasets: [
      {
        label: 'Cantidad de mis dispositivos',
        data: dispositivosInfo ? dispositivosInfo.map(dispositivo => dispositivo.cantidad) : [],
        backgroundColor: [
          'rgba(255, 92, 51, 0.5)',
          'rgba(255, 204, 0, 0.5)',
          'rgba(102, 204, 255, 0.5)',
          'rgba(51, 255, 153, 0.5)',
          'rgba(204, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 92, 51, 1)',
          'rgba(255, 204, 0, 1)',
          'rgba(102, 204, 255, 1)',
          'rgba(51, 255, 153, 1)',
          'rgba(204, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ marginTop: '2cm' }}>
      <Pie data={data} options={options} width={600} height={400} />
    </div>
  );
}
