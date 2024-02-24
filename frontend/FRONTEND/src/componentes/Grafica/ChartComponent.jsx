import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import Chart from 'chart.js/auto'; // Import Chart.js

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
          backgroundColor: 'rgba(0, 220, 195, 0.5)'
        }
      ]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true // Asegura que el eje y empiece en cero
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Consumo Mensual de todos los dispositivos',
          padding: {
            top: 10,
            bottom: 30
          }
        }
      }
    };

    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create new chart instance
    const ctx = document.getElementById('myChart');
    const newChartInstance = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: options
    });

    setChartInstance(newChartInstance);
  };

  return (
    <div>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default BarsChart;
