import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// Below for our cards
import BasicCard from '../components/BasicCard'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function HomeContainer (){
   // For our drop down
   const [namespace, setNamespace] = React.useState('');

   const handleChange = (event) => {
      setNamespace(event.target.value);
   };

   //dummy data for now
   const allNodesInfo = [{name: "Node1", ip: "192.168.56.23", os: "Linux", pods: "2", color: "red"},
                        {name: "Node2", ip: "192.168.12.12", os: "Linux", pods: "2", color: "green"},
                        {name: "Node3", ip: "255.1.1.9", os: "Linux", pods: "1", color: "blue" },
                        {name: "Node4", ip: "27.5.5.0", os: "Linux", pods: "1", color: "yellow"}];

   

   
   return (
   <>
      <Box sx={{ minWidth: 120 }}>
         <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label">Namespace</InputLabel>
         <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={namespace}
            label="Namespace"
            onChange={handleChange}
         >
            <MenuItem value={10}>Namespace 1</MenuItem>
            <MenuItem value={20}>Namespace 2</MenuItem>
            <MenuItem value={30}>Namespace 3</MenuItem>
         </Select>
         </FormControl>
      </Box>
{/*
         //MAKE A FETCH REQUEST TO GET BASIC NODE INFO IN AN ARRAY
         //array length will the number of cards
   */}
         
      {/* <List sx={{ display: 'flex'}}>
         <ListItem> <BasicCard /> </ListItem>
         <ListItem> <BasicCard /> </ListItem>
         <ListItem> <BasicCard /> </ListItem>
         <ListItem> <BasicCard /> </ListItem>
      </List> */}

      <List sx={{ display: 'flex'}}>
         {
            allNodesInfo.map((node) => (
               <ListItem>
                  <BasicCard name={node.name} ip={node.ip} os={node.os} pods={node.pods} color={node.color}/>
               </ListItem>
            ))
         }
      </List>

      <h1> This is home container</h1>
   </>
   );
}
