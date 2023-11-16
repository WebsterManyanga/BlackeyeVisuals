import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import LatestWork from './Components/LatestWork/LatestWork';
import Prices from './Components/Prices/Prices';
import Reviews from './Components/Reviews/Reviews';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Portfolio />
      <LatestWork />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
