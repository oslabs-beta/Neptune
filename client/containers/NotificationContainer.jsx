import React from 'react';
import SearchBar from '../components/SearchBar';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BasicCard from '../components/BasicCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import NotificationCard from '../components/NotificationCard';





export default function NotisContainer (){
  const [namespace, setNamespace] = React.useState('');

  const handleChange = (event) => {
    setNamespace(event.target.value);
  };

  const [notis, setNotis] = useState([]);
  useEffect(() => {

    fetch('api/k8s/promAlerts')
    .then((response) => response.json())
    .then((data) => {

        // nodesInfo.push(node);
        setNotis((prev) => ([...data]));
      })

  },[])

  return (
  <>
   <Grid container spacing={2}>
      <Grid item xs={10}>
        <SearchBar/>
      </Grid>
      <Grid item xs={2}>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Sort By</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={namespace}
                label='sortBy'
                onChange={handleChange}
              >
                <MenuItem value={10}>Alert Name</MenuItem>
                <MenuItem value={20}>Namespace</MenuItem>
                <MenuItem value={30}>Severity</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
          </Box>
      </Grid> 
   </Grid>
  
   <Grid container spacing={1}>
        {notis.map((noti) => (

            <Grid item direction= 'row' xs={12}>
              <NotificationCard
                alertname={noti.labels.alertname}
                description={noti.annotations.description}
                namespace={noti.labels.namespace}
                service={noti.labels.service}
                severity={noti.labels.severity}
                state={noti.state}
                activeAt={noti.activeAt}
                value={noti.value}
                summary={noti.annotations.summary}
              />
            </Grid>

          ))}

    </Grid>
  </>
  );
}
