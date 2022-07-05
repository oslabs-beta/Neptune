import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(){

  const [data, setData] = React.useState('');

  function handleClick() {
    fetch('http://localhost:8080/api/')
      .then(response => response.json())
      .then(data =>  {
        setData(data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return(
    <>
    <div>
      <h1>Front End Neptune World</h1>
      <button onClick={handleClick}>SEND</button>
      {data && <h1>{data}</h1>}
    </div>
    </>
  )
}

export default App;