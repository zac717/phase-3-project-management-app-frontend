import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainRedister from './components/MainRedister';
import Main from './Main';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <MainRedister/>}/>
        <Route path='main' element={ <Main/>}/>

      </Routes>
      
    </div>
  );
}

export default App;