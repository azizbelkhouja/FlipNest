import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './customer/components/Navbar';
import Home from './customer/pages/Home/Home';


function App() {
  return (
    <div>

      <Navbar/>
      <Home/>

    </div>
  );
}

export default App;
