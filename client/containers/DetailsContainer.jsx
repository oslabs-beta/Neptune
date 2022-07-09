import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Node from '../components/Node';
import Pods from '../components/Pods';
import Depl from '../components/Depl';
import Service from '../components/Service';
import Namespace from '../components/Namespace';

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
    fetch('http://localhost:8080/api/k8s/pod')
      .then((response) => response.json())
      .then((data) => {
        setPodNumber(data);
        console.log('POD COUNT: ', data);
      });

    // return node count
    fetch('http://localhost:8080/api/k8s/node')
      .then((response) => response.json())
      .then((data) => {
        setNodeNumber(data);
        console.log('NODE COUNT: ', data);
      });

    // return deployment count
    fetch('http://localhost:8080/api/k8s/deployment')
      .then((response) => response.json())
      .then((data) => {
        setDeplNumber(data);
        console.log('DEPL COUNT: ', data);
      });

    // return services count
    fetch('http://localhost:8080/api/k8s/services')
      .then((response) => response.json())
      .then((data) => {
        setServiceNumber(data);
        console.log('SERVICES COUNT: ', data);
      });

    // fetch req for namespaces
    fetch('http://localhost:8080/api/k8s/namespace')
      .then((response) => response.json())
      .then((data) => {
        setNamespaceNumber(data);
        console.log('NAMESPACEX COUNT', data);
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

      <h1> This is details container</h1>
    </>
  );
}