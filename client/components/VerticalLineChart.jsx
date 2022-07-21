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
      text: 'Pod Memory and Performance',
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

export default function VerticalLineChart({allPodsData}) {

  const data2 = {};
  data2.labels = [];
  let minCount = 0;
  for(let i = 0; i < allPodsData['undefined'].length; i++ ) //the count of x-values depend on the length of the array of each key
  {
    data2.labels.push(`${minCount = minCount + 30}min`);
  }
  // for each dataset we will have an obj
  data2.datasets = [];
  
  for(let podName in allPodsData)
  { 
    if(podName !== 'undefined')
    {
      const podNameMemory = {};
      podNameMemory.label = podName;
      podNameMemory.data = [];
      const outerArr = allPodsData[podName] //outer array contains array of mem usage
      outerArr.forEach( innerArr => {podNameMemory.data.push(innerArr[0] % 10000)}); //take the first value of each inner array 
      //random colors from Details Container
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      podNameMemory.backgroundColor = `rgba(${r},${g},${b}, 0.5)`;

      data2.datasets.push(podNameMemory);
    }
  }
  
  console.log('lets get down', data2);
  console.log('data 1', data);


  return <Bar options={options} data={data2} />;
}
