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

export default function DetailsContainer() {
  //fetch request originally in  Pods.jsx
  const [podNumber, setPodNumber] = useState([]);
  const [nodeNumber, setNodeNumber] = useState([]);
  const [deplNumber, setDeplNumber] = useState([]);
  const [serviceNumber, setServiceNumber] = useState([]);
  const [namespaceNumber, setNamespaceNumber] = useState([]);

  // useEffect counts the state
  useEffect(() => {
    // return pod count
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
  }, []);

  return (
    <>
      <List sx={{ display: 'flex' }}>
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
          <LineChart />{' '}
        </Grid>
        <Grid item xs={6}>
          {' '}
          <VerticalLineChart />{' '}
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

      <h1> This is details container</h1>
    </>
  );
}
