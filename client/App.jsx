import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailsContainer from './containers/DetailsContainer';
import MiniDrawer from './containers/MiniDrawer';
import { Container } from '@mui/material';
import NotisContainer from './containers/NotisContainer';
import QueryContainer from './containers/QueryContainer';
import HomeContainer from './containers/HomeContainer';



function App() {
  return (
    <>
      <BrowserRouter >
          <MiniDrawer>
              <Routes>
                <Route path='/' element={<HomeContainer />} />
                <Route path='/details' element={<DetailsContainer />} />
                <Route path='/notis' element={<NotisContainer />} />
                <Route path='/query' element={<QueryContainer />} />
              </Routes>
          </MiniDrawer>
      </BrowserRouter>
    </>
  );
}

export default App;
