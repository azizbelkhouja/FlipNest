import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/PageDetails/ProductDetails';
import Review from './customer/pages/Review/Review';


function App() {
  return (
    <div>

      <Navbar/>
      {/* <Home/> */}
      {/* <Product /> */}
      {/* <ProductDetails/> */}
      <Review/>
    </div>
  );
}

export default App;
