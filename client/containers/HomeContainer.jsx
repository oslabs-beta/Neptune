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
  const [networkReceived, setNetworkReceived] = useState({});
  const [networkTransmitted, setNetworkTransmitted] = useState({});




  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////// --- FETCH REQ FROM KUBERNETES DASHBOARD ------//////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // useEffect counts the state
  useEffect(() => {
    //CHANGED THE ALLNAMESPACES TO THE BEGGINING 
    //return pod count

    fetch('/api/k8s/podCount')
      .then((response) => response.json())
      .then((data) => {
        setPodNumber(data.length);
        console.log('POD COUNT: ', data.length);
      });

    // return node count
    fetch('/api/k8s/node')
      .then((response) => response.json())
      .then((data) => {
        setNodeNumber(data.length);
        console.log('NODE COUNT: ', data.length);
      });

    // return deployment count
    fetch('/api/k8s/deployment')
      .then((response) => response.json())
      .then((data) => {
        setDeplNumber(data.length);
        console.log('DEPL COUNT: ', data.length);
      });

    // return services count
    fetch('/api/k8s/services')
      .then((response) => response.json())
      .then((data) => {
        setServiceNumber(data.length);
        console.log('SERVICES COUNT: ', data.length);
      });

    // fetch req for namespaces
    fetch('/api/k8s/namespace')
      .then((response) => response.json())
      .then((data) => {
        setNamespaceNumber(data.length);
        console.log('NAMESPACEX COUNT', data.length);
      });

    //fetch req for line graph data (memory used for all namespaces)
    fetch('/api/k8s/memoryAllNamespaces')
      .then((response) => response.json())
      .then((data) => {
        setLineData(data);
      });


    
    //fetch req for vertical line graph data (memory used for all pods)
    fetch('/api/k8s/memoryAllPods')
      .then((response) => response.json())
      .then((data) => {
        setAllPodsData(data);
      });

    ///api/k8s/clusterNetRec
    //fetch req for area chart (Network Received)
    fetch('/api/k8s/clusterNetRec')
    .then((response) => response.json())
    .then((data) => {
      setNetworkReceived(data);
      console.log('network received inside homecontainer', networkReceived);
    });


    ///api/k8s/clusterNetTrans
    //fetch req for area chart (Network Transmitted)
    fetch('/api/k8s/clusterNetTrans')
    .then((response) => response.json())
    .then((data) => {
      setNetworkTransmitted(data);
    });
  },[]);

  

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////// --- FETCH REQ FROM PROMETHEUS ------//////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
   
      <List sx={{ 
        display: 'flex',
        }}>
        <ListItem
         sx={{
          placeContent: "center",
          marginBottom:"2%",
          }}>
          <Node nodeNumber={nodeNumber} key={1} />
          <Pods podNumber={podNumber} key={2} />
          <Depl deplNumber={deplNumber} key={3} />
          <Service serviceNumber={serviceNumber} key={4} />
          <Namespace namespaceNumber={namespaceNumber} key={5} />
        </ListItem>
      </List>

      <Grid container spacing={4}>
        <Grid item xs={6}>
          {' '}
        
          { lineData.default && <LineChart lineData={lineData} key={6} /> }
        </Grid>
        <Grid item xs={6}>
          {' '}
          { allPodsData.undefined && <VerticalLineChart allPodsData={allPodsData} key={7} /> }
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          {' '}
          { networkTransmitted.undefined && <AreaChart  networkData={networkTransmitted} networkType={'Cluster Network Transmitted'} key={8}/> }
        </Grid>
        <Grid item xs={6}>
          {' '}
          { networkReceived.undefined && <AreaChart  networkData={networkReceived} networkType={'Cluster Network Received'} key={9}/> }
        </Grid>
      </Grid>


      
    </>
  );
}
