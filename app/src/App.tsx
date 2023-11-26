import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import LatestWork from './Components/LatestWork/LatestWork';
import Prices from './Components/Prices/Prices';
import Reviews from './Components/Reviews/Reviews';
import Footer from './Components/Footer/Footer';
import { Triangle } from 'react-loader-spinner';

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    setTimeout(() => setLoaded(true), 10000)
  },[]);

  return (
    loaded ? 
    <div className="App">
      <Header />
      <Portfolio />
      <LatestWork />
      <Prices />
      <Footer />
    </div>
    : <Triangle
        height="80"
        width="80"
        color="#D0B8AC"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass="loadingScreen"
        visible={true}
        />
  );
}

export default App;
