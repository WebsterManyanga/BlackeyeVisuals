import React,  {useState } from 'react'
import './Portfolio.css'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useGlobalState } from '../../state';
import { imageLibrary } from '../../imageLibrary';
import Picture from '../Picture/Picture';
import LazyLoad from 'react-lazy-load';

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
          <LazyLoad>
            <Carousel showArrows={!menuOpen} showIndicators={!menuOpen} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={5000} preventMovementUntilSwipeScrollTolerance={true} >
              <div>
                <Picture image={imageLibrary[12]} />
              </div>
              <div>
                <Picture image={imageLibrary[9]} />
              </div>

              <div>
                <Picture image={imageLibrary[3]}/>
              </div>
              <div>
                <Picture image={imageLibrary[8]} />
              </div>

              <div>
                <Picture image={imageLibrary[10]} />
              </div>
              <div>
                <Picture image={imageLibrary[11]} />
              </div>
              <div>
                <Picture image={imageLibrary[14]} />
              </div>
              <div>
                <Picture image={imageLibrary[15]} />
              </div>
              <div>
                <Picture image={imageLibrary[19]} />
              </div>
              <div>
                <Picture image={imageLibrary[24]} />
              </div>
              <div>
                <Picture image={imageLibrary[25]} />
              </div>
              <div>
                <Picture image={imageLibrary[26]} />
              </div>
              <div>
                <Picture image={imageLibrary[27]} />
              </div>
              <div>
                <Picture image={imageLibrary[28]} />
              </div>
              <div>
                <Picture image={imageLibrary[29]} />
              </div>
              <div>
                <Picture image={imageLibrary[31]} />
              </div>
              <div>
                <Picture image={imageLibrary[32]} />
              </div>
              <div>
                <Picture image={imageLibrary[33]} />
              </div>
              <div>
                <Picture image={imageLibrary[35]} />
              </div>
              <div>
                <Picture image={imageLibrary[36]} />
              </div>
              <div>
                <Picture image={imageLibrary[39]} />
              </div>
              <div>
                <Picture image={imageLibrary[47]} />
              </div>
              <div>
                <Picture image={imageLibrary[48]} />
              </div>
            </Carousel>
          </LazyLoad>
          <LazyLoad>
            <Carousel showArrows={!menuOpen} showIndicators={!menuOpen} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={5000} preventMovementUntilSwipeScrollTolerance={true} >
              <div>
                <Picture image={imageLibrary[12]} />
              </div>
              <div>
                <Picture image={imageLibrary[9]} />
              </div>

              <div>
                <Picture image={imageLibrary[3]}/>
              </div>
              <div>
                <Picture image={imageLibrary[8]} />
              </div>

              <div>
                <Picture image={imageLibrary[10]} />
              </div>
              <div>
                <Picture image={imageLibrary[11]} />
              </div>
              <div>
                <Picture image={imageLibrary[14]} />
              </div>
              <div>
                <Picture image={imageLibrary[15]} />
              </div>
              <div>
                <Picture image={imageLibrary[19]} />
              </div>
              <div>
                <Picture image={imageLibrary[24]} />
              </div>
              <div>
                <Picture image={imageLibrary[25]} />
              </div>
              <div>
                <Picture image={imageLibrary[26]} />
              </div>
              <div>
                <Picture image={imageLibrary[27]} />
              </div>
              <div>
                <Picture image={imageLibrary[28]} />
              </div>
              <div>
                <Picture image={imageLibrary[29]} />
              </div>
              <div>
                <Picture image={imageLibrary[31]} />
              </div>
              <div>
                <Picture image={imageLibrary[32]} />
              </div>
              <div>
                <Picture image={imageLibrary[33]} />
              </div>
              <div>
                <Picture image={imageLibrary[35]} />
              </div>
              <div>
                <Picture image={imageLibrary[36]} />
              </div>
              <div>
                <Picture image={imageLibrary[39]} />
              </div>
              <div>
                <Picture image={imageLibrary[47]} />
              </div>
              <div>
                <Picture image={imageLibrary[48]} />
              </div>
            </Carousel>
          </LazyLoad>

        </div>
          <p>
            "Welcome to BlackEye Visuals, where creativity meets authenticity in every frame. We are passionate about capturing moments that tell your unique story through the lens of our creative vision. Explore our portfolio and let our images speak to the genuine emotions, vivid colors, and captivating compositions that define our work. Join us on a journey of visual storytelling, where every shot is a masterpiece of your own narrative"
          </p>
          <LazyLoad>
            <Picture image={imageLibrary[48]} extraClasses='portfolio__sample'/>
          </LazyLoad>
      </div>
      {!showPortfolio && <button className='portfolio__more' onClick={() => onSelectMorePortfolio()}><a href='#morePortfolio'>See More<BsArrowRight /></a></button>}

      </div>
      {showPortfolio && <div id='morePortfolio' className={`more-portfolio`}>
        <div className="more-portfolio__photos">
          <button className='more-portfolio__close' onClick={() => setShowPortfolio(false)}><AiOutlineClose/></button>
          <LazyLoad>
            <Picture image={imageLibrary[52]} /> 
          </LazyLoad>
        </div>
      </div>}

    </section>
  )
}