import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

// instead of using regular rendering, we will be using the root method for react v 18.0
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <App/>
  </>
)