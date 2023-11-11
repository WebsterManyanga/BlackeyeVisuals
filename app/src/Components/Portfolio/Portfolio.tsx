import React,  {useState } from 'react'
import './Portfolio.css'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useGlobalState } from '../../state';
import { imageLibrary } from '../../imageLibrary';
import morePortfolio from '../../assets/morePortfolio.jpg'


export default function Portfolio() {

  const [menuOpen, setMenuOpen] = useGlobalState('menuOpen');
  const [showPortfolio, setShowPortfolio] = useGlobalState('showPorfolio');

  const onSelectMorePortfolio = () => {
    setShowPortfolio(true);
  }

  return (
    <section className='feature portfolio' id='portfolio'>
      <div className="lessporfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
        <div className='carousel-container'>
          <Carousel showArrows={!menuOpen} showIndicators={!menuOpen} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={5000} preventMovementUntilSwipeScrollTolerance={true} >
            <div>
              <img src={imageLibrary[0].image} alt="portrait" />
              <p>{imageLibrary[0].person}</p>
            </div>
            <div>
              <img src={imageLibrary[1].image} alt="portrait" />
              <p>{imageLibrary[1].person}</p>
            </div>
            <div>
              <img src={imageLibrary[45].image} alt="portrait" />
              <p>{imageLibrary[45].person}</p>
            </div>
            <div>
              <img src={imageLibrary[15].image} alt="portrait" />
              <p>{imageLibrary[15].person}</p>
            </div>
            <div>
              <img src={imageLibrary[20].image} alt="portrait" />
              <p>{imageLibrary[20].person}</p>
            </div>
          </Carousel>
        </div>
          <p>
            "Welcome to BlackEye Visuals, where creativity meets authenticity in every frame. We are passionate about capturing moments that tell your unique story through the lens of our creative vision. Explore our portfolio and let our images speak to the genuine emotions, vivid colors, and captivating compositions that define our work. Join us on a journey of visual storytelling, where every shot is a masterpiece of your own narrative"
          </p>
        <img className='portfolio__sample' src={imageLibrary[19].image} alt="portrait" />
      </div>
      {!showPortfolio && <button className='portfolio__more' onClick={() => onSelectMorePortfolio()}><a href='#morePortfolio'>See More<BsArrowRight /></a></button>}

      </div>
      {showPortfolio && <div id='morePortfolio' className={`more-portfolio`}>
        <div className="more-portfolio__photos">
          <button className='more-portfolio__close' onClick={() => setShowPortfolio(false)}><AiOutlineClose/></button>
          <img src={morePortfolio} alt="" />
        </div>
      </div>}

    </section>
  )
}