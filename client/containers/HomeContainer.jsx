import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Node from '../components/Node';
import Pods from '../components/Pods';
import Depl from '../components/Depl';
import Service from '../components/Service';
import Namespace from '../components/Namespace';
import LineChart from '../components/LineChart';
import Grid from '@mui/material/Grid';
import VerticalLineChart from '../components/VerticalLineChart';
import PolarAreaChart from '../components/PolarAreaChart';
import AreaChart from '../components/AreaChart';

export default function HomeContainer() {
  //fetch request originally in  Pods.jsx
  const [podNumber, setPodNumber] = useState([]);
  const [nodeNumber, setNodeNumber] = useState([]);
  const [deplNumber, setDeplNumber] = useState([]);
  const [serviceNumber, setServiceNumber] = useState([]);
  const [namespaceNumber, setNamespaceNumber] = useState([]);
  const [lineData, setLineData] = useState({});
  const [allPodsData, setAllPodsData] = useState({});




  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////// --- FETCH REQ FROM KUBERNETES DASHBOARD ------//////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // useEffect counts the state
  useEffect(() => {
//CHANGED THE ALLNAMESPACES TO THE BEGGINING 
    //return pod count
    fetch('http://localhost:8080/api/k8s/podCount')
      .then((response) => response.json())
      .then((data) => {
        setPodNumber(data.length);
        console.log('POD COUNT: ', data.length);
      });

    // return node count
    fetch('http://localhost:8080/api/k8s/node')
      .then((response) => response.json())
      .then((data) => {
        setNodeNumber(data.length);
        console.log('NODE COUNT: ', data.length);
      });

    // return deployment count
    fetch('http://localhost:8080/api/k8s/deployment')
      .then((response) => response.json())
      .then((data) => {
        setDeplNumber(data.length);
        console.log('DEPL COUNT: ', data.length);
      });

    // return services count
    fetch('http://localhost:8080/api/k8s/services')
      .then((response) => response.json())
      .then((data) => {
        setServiceNumber(data.length);
        console.log('SERVICES COUNT: ', data.length);
      });

    // fetch req for namespaces
    fetch('http://localhost:8080/api/k8s/namespace')
      .then((response) => response.json())
      .then((data) => {
        setNamespaceNumber(data.length);
        console.log('NAMESPACEX COUNT', data.length);
      });

    //fetch req for line graph data (memory used for all namespaces)
    fetch('http://localhost:8080/api/k8s/memoryAllNamespaces')
      .then((response) => response.json())
      .then((data) => {
        setLineData(data);
      });

    
    //fetch req for vertical line graph data (memory used for all pods)
    fetch('http://localhost:8080/api/k8s/memoryAllPods')
      .then((response) => response.json())
      .then((data) => {
        setAllPodsData(data);
      });

      // To check if UseState is rendening multiple times 
     console.log("I fire once?")
  },[]);

  

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////// --- FETCH REQ FROM PROMETHEUS ------//////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
   
      <List sx={{ 
        display: 'flex'}}>
        <ListItem>
          <Node nodeNumber={nodeNumber} key={1} />
          <Pods podNumber={podNumber} key={2} />
          <Depl deplNumber={deplNumber} key={3} />
          <Service serviceNumber={serviceNumber} key={4} />
          <Namespace namespaceNumber={namespaceNumber} key={5} />
        </ListItem>
      </List>

      <h1> This is cluster section</h1>

      <h2>below is node section</h2>

      <Grid container spacing={4}>
        <Grid item xs={6}>
          {' '}
        
          { lineData.default && <LineChart lineData={lineData} key={1} /> }
        </Grid>
        <Grid item xs={6}>
          {' '}
          { allPodsData.undefined && <VerticalLineChart allPodsData={allPodsData} key={1} /> }
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          {' '}
          <PolarAreaChart />{' '}
        </Grid>
        <Grid item xs={6}>
          {' '}
          <AreaChart />{' '}
        </Grid>
      </Grid>

      <h1> This is home container</h1>
    </>
  );
}
