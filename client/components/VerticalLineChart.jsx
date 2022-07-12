import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Pod Capacity',
    },
  },
};

const labels = ['0.00 ms', '500.00 ms', '1000.00 ms', '1500.00 ms', '2000.00 ms', '2500.00 ms', '3000.00 ms'];
const dummyData = [0, 300, 40, 500, 624, 982];
const dummyData2 = [0, 10, 100, 120,500, 999];

export const data = {
  labels,
  datasets: [
    {
      label: 'Pod Capacity 1',
      data: dummyData,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
    {
      label: 'Pod Capacity 2',
      data: dummyData2,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function VerticalLineChart() {
  return <Bar options={options} data={data} />;
}
