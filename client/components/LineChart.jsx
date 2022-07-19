import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import our data from Prometheus eventually

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', // as const,
    },
    title: {
      display: true,
      text: 'Memory Usage of Each Namespace in MB',
    },
  },
};

// labels is x-values

const labels = [
  '0.00 ms',
  '500.00 ms',
  '1000.00 ms',
  '1500.00 ms',
  '2000.00 ms',
  '2500.00 ms',
  '3000.00 ms',
  '3500.00 ms',
  '4000.00 ms',
  '4500.00 ms',
  '5000.00 ms',
  '5500.00 ms',
  '6000.00 ms',
  '6500.00 ms',
  '7000.00 ms',
  '7500.00 ms, 8000.00 ms',
  '8500.00 ms',
  '9000.00 ms',
];

  //dummyData are the y-values
const dummyData = [
  14, 45, 32, 7, 2, 22, 5, 56, 6, 12, 23, 200, 60, 260, 70, 267, 220, 225,
];
const dummyData2 = [
  5, 6, 8, 1, 20, 110, 55, 6, 8, 60, 20, 18, 32, 23, 75, 47, 89, 200,
];
const dummyData3 = [
  5, 6, 8, 1, 20, 18, 5, 6, 8, 1, 20, 18, 32, 23, 75, 47, 89, 200,
];
const dummyData4 = [
  1, 2, 3, 2, 12, 18, 7, 6, 8, 11, 20, 18, 180, 230, 98, 10, 89, 20,
];

export const data = {
  //labels is x-values
  labels,
  // data: dummyData, are the y-values
  datasets: [
    {
      label: 'Network Utilization',
      data: dummyData,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Network Utilization 2',
      data: dummyData2,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Network Utilization 3',
      data: dummyData3,
      borderColor: 'rgb(53, 216, 235)',
      backgroundColor: 'rgba(53, 216, 235, 0.5)',
    },
    {
      label: 'Network Utilization 4',
      data: dummyData4,
      borderColor: 'rgb(153, 162, 235)',
      backgroundColor: 'rgba(153, 162, 235, 0.5)',
    },
  ],
};

export default function LineChart({lineData}) {
    console.log("lineData --> ", lineData);


  // iterate thru the object, skip the undefined (first element)

  //Access the array of each of the key
  //each array will contain an array of y values
  // x - time (30 min) -- labels /   and y - values  are data

  // the will be in byte, divide by a million to make in mega bytes
  

  const data2 = {};
  data2.labels = [];
  let minCount = 0;
  console.log("this console" ,lineData['default'])
  for(let i = 0; i < lineData['default'].length; i++ ) //the count of x-values depend on the length of the array of each key
  {
    data2.labels.push(`${minCount = minCount + 30}min`);
  }
  // for each dataset we will have an obj
  data2.datasets = [];
  
  for(let namespace in lineData)
  { 
    if(namespace !== 'undefined')
    {
      const namespaceMemory = {};
      namespaceMemory.label = namespace;
      namespaceMemory.data = [];
      const outerArr = lineData[namespace] //outer array contains array of mem usage
      outerArr.forEach( innerArr => {namespaceMemory.data.push(innerArr[0] / 1000000)}); //take the first value of each inner array 
      //random colors from Details Container
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      namespaceMemory.borderColor = `rgba(${r},${g},${b})`; 
      namespaceMemory.backgroundColor = `rgba(${r},${g},${b}, 0.5)`;

      data2.datasets.push(namespaceMemory);
    }
  }
  
 // console.log('lets get down', data2);
//console.log('data 1', data);

  return <Line options={options} data={data2} />;
}
