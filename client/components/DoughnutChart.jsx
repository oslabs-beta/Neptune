import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Node 1', 'Node 2', 'Node 3', 'Node 4'],
  datasets: [{
    data: [20, 30, 35, 15],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',

    ],
    borderWidth: 1,
  }]
}

export default function DoughnutChart() {
  return (
  <div>
     <h1>CPU Usage</h1>
     <Doughnut data={data} />
  </div>
  )
}