import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsContainer from './containers/DetailsContainer';
import MiniDrawer from './containers/MiniDrawer';
import { Container, Grid } from '@mui/material';
import NotificationContainer from './containers/NotificationContainer';
import QueryContainer from './containers/QueryContainer';
import HomeContainer from './containers/HomeContainer';
import '../client/styles/style.css';




function App() {
  return (
    <>
  <div className='App'>
  {/* 
      <div className='AppGlass'>

    

   
     <Container maxWidth="sm" id="mainContainer" sx= {{
        background:"whitesmoke",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
    }}>*/}
       
      <BrowserRouter >
          <MiniDrawer id = "logoBar">
              <Routes>
                <Route path='/' element={<HomeContainer />} />
                <Route path='/details' element={<DetailsContainer />} />
                <Route path='/alerts' element={<NotificationContainer />} />
              </Routes>
          </MiniDrawer>
      </BrowserRouter>
      {/*
    </Container>
    </div>
     */} 
  </div>
    </>
  );
}

export default App;
