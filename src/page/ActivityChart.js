// ActivityChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        label: 'Activity',
        data: [5000, 7000, 4000, 6000, 3000, 8000, 12000, 15000, 8000, 10000, 6000],
        backgroundColor: 'purple',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        borderRadius: 4,
        barThickness: 20,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 16000,
        ticks: {
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '90%', backgroundColor: '#1e1e1e', }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
