import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BasicCard from '../components/BasicCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DoughnutChart from '../components/DoughnutChart';
import PieChart from '../components/PieChart';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import GaugeChartTemplate from '../components/GaugeChartTemplate'

export default function DetailsContainer() {
  // For our drop down
  const [cpu, setCpu] = useState(0);
  const [mem, setMem] = useState(0);
  const [podData, setPodData] = useState({});
  const [podsInfo, setPodsInfo] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    const data = event.target.value;

    const pods = [];
    data.forEach( (element, i) => {
        
      //for each pod of podsInfo
      const pod = {};

      pod.name = element['Pod Name'];
      pod.ip = element['Pod IP'];
      pod.os = 'Linux';

      //assign random color
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      pod.color = `rgba(${r},${g},${b},1)`;
      pod.key = {i};

      pods.push(pod);
    })

    
    setPodsInfo(pods);
  };
  
  
  useEffect(() => {

    fetch('/api/k8s/podInfo')
    .then((response) => response.json())
    .then((data) => {
      
      data.forEach( (element, i) => {
        
        //for each pod of podsInfo
        const pod = {};

        pod.name = element.metadata.generateName;
        pod.ip = element.status.podIP;
        pod.os = 'Linux';
        //assign random color
        const r = 0;
        const g = 138;
        const b = 216;
        pod.color = `rgba(${r},${g},${b},1)`;
        pod.key = {i};

        setPodsInfo((prev) => ([...prev,pod]));
      })
    });

      //console.log(podsInfo);
      //---- FETCH REQ FOR THE 1ST SPEEDOMETER ---- CPU USAGE OF THE CLUSTER 
      fetch('/api/k8s/promClusterCpuPct')
      .then((response) => response.json())
      .then((data) => {
        setCpu(data);
      });

      //---- FETCH REQ FOR THE 2ND SPEEDOMETER ---- CPU MEMORY OF THE CLUSTER 
       fetch('/api/k8s/promClusterMemoryUtil')
       .then((response) => response.json())
       .then((data) => {
         setMem(data);
       });

    // get pod info based for each namespace
    fetch('/api/k8s/podData')
       .then((response) => response.json())
       .then((data) => {
         setPodData(data);
       });
    
},[])


  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Namespace</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={podData['default']}
            label='Namespace'
            onChange={handleChange}
          >
            
            {/* <MenuItem value={10}>Namespace 1</MenuItem>
            <MenuItem value={20}>Namespace 2</MenuItem>
            <MenuItem value={30}>Namespace 3</MenuItem> */}
            {Object.keys(podData).map(namespace => (
              <MenuItem value={podData[namespace]}>{namespace}</MenuItem>
            ))}


          </Select>
        </FormControl>
        <br />
        <br />
      </Box>
      
      <Grid container spacing={2} columns={4}>
        {podsInfo.map((pod) => (
            <Grid item xs={0.8}>
              <BasicCard
                name={pod.name}
                ip={pod.ip}
                os={pod.os}
                color={pod.color}
              />
            </Grid>

          ))}
      </Grid>
      <br />
      <br />
      <br />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <GaugeChartTemplate
            chartData={+(Math.round(cpu + "e+2")  + "e-2")}
            title='Cluster CPU Usage'
            label='Cluster CPU Usage'
          />
        </Grid>
        <Grid item xs={6}>
        <GaugeChartTemplate
            id = "speedometer"
            chartData={+(Math.round(mem + "e+2")  + "e-2")}
            title='Cluster Memory Usage' 
            label='Cluster Memory Usage'
          />
        </Grid>
      </Grid>
      
      
      {/* <DoughnutChart /> */}
    </>
  );
}
