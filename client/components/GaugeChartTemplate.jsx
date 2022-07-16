import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Paper, Typography } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';


function GaugeChartTemplate({ chartData, title, label }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    ChartDataLabels
  );

  const options = {
    plugins: {
      title: {
        display: false,
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
      datalabels: {
        // This code is used to display data values
        anchor: 'center',
        align: 'center',
        font: {
          weight: 'bold',
          size: 20,
        },
        formatter: (value) => value + '%',
        color: 'white',
      },
    },
    layout: {
      padding: {
        top: '-50',
      }, 
    },
    pointRadius: 0,
    circumference: '180',
    rotation: '-90',
  };

  let utilColor;

  if (chartData) {
    if (100 - chartData <= 33.3) {
      utilColor = '#ea2315';
    } else if (100 - chartData > 33.3 && 100 - chartData < 66.6) {
      utilColor = 'yellow';
    } else {
      utilColor = 'rgba(39, 244, 142, 1)';
    }
  }

  const data = {
    datasets: [
      {
        data: [chartData, 100 - chartData],
        borderColor: ['transparent', 'transparent'],
        backgroundColor: [utilColor, '#808080'],
      },
    ],
  };

  const renderChartData = () => {
    if (chartData !== undefined) {
      return <Typography variant='h1'>{chartData.toString() + '%'}</Typography>;
    }
  };

  return (

    <>
      <Typography variant='body1' color='text.secondary'>
        {title}
      </Typography>
      <Doughnut options={options} data={data} className='gaugeChartClass' />
    </>
  );
}

export default GaugeChartTemplate;