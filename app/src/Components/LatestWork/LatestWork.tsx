import React,  {useState } from 'react'
import '../Portfolio/Portfolio.css'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { imageLibrary } from '../../imageLibrary';
import Picture from '../Picture/Picture';
import { Link } from 'react-router-dom';
export default function LatestWork() {

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
      <h1>Our Latest Work</h1>
      <div className="portfolio__container">
        <div className='carousel-container'>
            <Carousel responsive={responsive} infinite>
              <div>
                <Picture image={imageLibrary[54]} />
              </div>
              <div>
                <Picture image={imageLibrary[54]} />
              </div>
              <div>
                <Picture image={imageLibrary[53]} />
              </div>
            </Carousel>
        </div>
          <p>
          Introducing our latest masterpiece: a visual tale meticulously crafted by BlackEye Visuals. Dive into a world where creativity knows no bounds and authenticity reigns supreme
          </p>  
            <Picture image={imageLibrary[33]} extraClasses='portfolio__sample'/>
      </div>
      <Link to='./more-pictures' className='portfolio__more'>See More<BsArrowRight /></Link>
      </div>

    </section>
  )
}
