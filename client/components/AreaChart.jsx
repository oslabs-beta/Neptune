import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      text: 'Network traffic',
    },
  },
};


const labels = ['0.00 ms', '500.00 ms', '1000.00 ms', '1500.00 ms', '2000.00 ms', '2500.00 ms', '3000.00 ms'];
const dummyData = [20, 262, 175, 210, 324, 149, 120];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: dummyData,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function AreaChart({networkData, networkType}) {

// iterate thru the object, skip the undefined (first element)

  //Access the array of each of the key
  //each array will contain an array of y values
  // x - time (30 min) -- labels /   and y - values  are data

  // the will be in byte, divide by a million to make in mega bytes
 

  const data2 = {};
  data2.labels = [];
  let minCount = 0;
  console.log('Network data inside Area Chart component', networkData);
  for(let i = 0; i < networkData['undefined'].length; i++ ) //the count of x-values depend on the length of the array of each key
  {
    data2.labels.push(`${minCount = minCount + 30}min`);
  }
  // for each dataset we will have an obj
  data2.datasets = [];
  
  
  const clusterNetWork = {};
  clusterNetWork.fill = true;
  clusterNetWork.label = networkType;
  clusterNetWork.data = [];
  const outerArr = networkData["undefined"] //outer array contains array of mem usage
  outerArr.forEach( innerArr => {clusterNetWork.data.push(innerArr[0] % 1000)}); //take the first value of each inner array 
  //random colors from Details Container
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  clusterNetWork.borderColor = `rgba(${r},${g},${b})`; 
  clusterNetWork.backgroundColor = `rgba(${r},${g},${b}, 0.5)`;

  data2.datasets.push(clusterNetWork);




  return <Line options={options} data={data2} />;
}
