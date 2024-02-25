import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import Chart from 'chart.js/auto';

const BarsChart = () => {
  const [data, setData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/calculoindividual');
        setData(response.data.dispositivos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      renderChart();
    }
  }, [data]);

  const renderChart = () => {
    const dispositivosOrdenados = data.sort((a, b) => a.consumoMensual - b.consumoMensual);
    const nombresDispositivos = dispositivosOrdenados.map(dispositivo => dispositivo.nombredispositivo);
    const consumosMensuales = dispositivosOrdenados.map(dispositivo => dispositivo.consumoMensual);

    const chartData = {
      labels: nombresDispositivos,
      datasets: [
        {
          label: 'Consumo Mensual',
          data: consumosMensuales,
          backgroundColor: [
            'rgba(255, 159, 64, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ]
        }
      ]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Consumo Mensual de Dispositivos',
          padding: 20,
          font: {
            size: 28,
            weight: 'bold'
          }
        },
        legend: {
          display: false
        }
      }
    };

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = document.getElementById('myChart');
    const newChartInstance = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: options
    });

    setChartInstance(newChartInstance);
  };

  return (
    <div style={{ marginTop: '2cm', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', padding: '20px' }}>
      <canvas id="myChart" style={{ width: '100%', height: '500px' }}></canvas>
    </div>
  );
};

export default BarsChart;

