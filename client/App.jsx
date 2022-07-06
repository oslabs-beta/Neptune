import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer.jsx'
import MiniDrawer from './containers/MiniDrawer.jsx';
import { Container } from '@mui/material';
import DetailsContainer from './containers/DetailsContaier.jsx';
import NotisContainer from './containers/NotisContainer.jsx';
import QueryContainer from './containers/QueryContainer.jsx';

function App(){

  
  return(
    <>
    <BrowserRouter> 
      <MiniDrawer>   
        <Container maxWidth='xl'>
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/details' element={<DetailsContainer />} />
            <Route path='/notis' element={<NotisContainer />} />
            <Route path='/query' element={<QueryContainer />} />
          </Routes>
        </Container>
      </MiniDrawer>
    </BrowserRouter>
    </>
  )
}

export default App;