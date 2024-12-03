import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/PageDetails/ProductDetails';


function App() {
  return (
    <div>

      <Navbar/>
      {/* <Home/> */}
      {/* <Product /> */}
      <ProductDetails/>
    </div>
  );
}

export default App;
