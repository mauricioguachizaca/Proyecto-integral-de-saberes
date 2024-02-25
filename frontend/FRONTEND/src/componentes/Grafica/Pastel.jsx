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
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
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
