import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import LatestWork from './Components/LatestWork/LatestWork';
import Prices from './Components/Prices/Prices';
import Footer from './Components/Footer/Footer';
import { Triangle } from 'react-loader-spinner';
import img1 from './assets/min/A-31.jpg';
import img2 from  './assets/A-21.jpg';
import img3 from './assets/A-31(3).jpg';
import img4 from './assets/A-21(2)-.jpg';


function App() {
  const [loaded, setLoaded] = useState(false);
  const backgroundImages = [img1, img2, img3, img4];
  var FontFaceObserver = require('fontfaceobserver');

  useEffect (()=>{
    const loadImage = (backgroundImage: string) => {
      return new Promise(resolve => {
        const image = new Image();
        image.src = backgroundImage;
        image.onload = resolve;
      })
    }

    Promise.all(backgroundImages.map(loadImage)).then(() => {
      const font = new FontFaceObserver('Cinzel Decorative');
      font.load().then(() => setLoaded(true));
    });
  }, [])

  return (
    loaded ? 
    <div className="App">
      <Header />
      <Portfolio />
      <LatestWork />
      <Prices />
      <Footer />
    </div>
    : 
    <>
      <Triangle
          height="80"
          width="80"
          color="#D0B8AC"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass="loadingScreen"
          visible={true}
        />
    </>

  );

}

export default App;
