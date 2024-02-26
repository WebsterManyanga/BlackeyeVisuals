import React,  {useState } from 'react'
import './Portfolio.css'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { imageLibrary } from '../../imageLibrary';
import Picture from '../Picture/Picture';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../state';
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useGlobalState('menuOpen');
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 
  return (
    <section className='feature portfolio' id='portfolio'>
      <div className="lessporfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
        <div className='carousel-container'>
            <Carousel responsive={responsive} infinite arrows={!menuOpen}>
              <div>
                <Picture image={imageLibrary[56]} />
              </div>
              <div>
                <Picture image={imageLibrary[35]} />
              </div>
              <div>
                <Picture image={imageLibrary[32]} />
              </div>
              <div>
                <Picture image={imageLibrary[13]} />
              </div>
              <div>
                <Picture image={imageLibrary[9]} />
              </div>
              <div>
                <Picture image={imageLibrary[48]} />
              </div>
            </Carousel>
        </div>
          <p>
            "Welcome to BlackEye Visuals, where creativity meets authenticity in every frame. We are passionate about capturing moments that tell your unique story through the lens of our creative vision. Explore our portfolio and let our images speak to the genuine emotions, vivid colors, and captivating compositions that define our work. Join us on a journey of visual storytelling, where every shot is a masterpiece of your own narrative"
          </p>  
            <Picture image={imageLibrary[47]} extraClasses='portfolio__sample'/>
      </div>
      <Link to='./more-pictures' className='portfolio__more'>See More<BsArrowRight /></Link>
      </div>

    </section>
  )
}
