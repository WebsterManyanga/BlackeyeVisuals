import React from 'react'
import './LatestWork.css'
import sample from '../../assets/Rectangle 15.png'
import sample2 from '../../assets/Rectangle 24.png'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGlobalState } from '../../state';
import { imageLibrary } from '../../imageLibrary';

export default function LatestWork() {
  const [menuOpen, setMenuOpen] = useGlobalState('menuOpen');

  return (
    <section className='feature latest-work' id='recents'>
      <h1>Our Latest Work</h1>
      <div className="latest-work__container">
        <p className='latest-work__detail'>
          Introducing our latest masterpiece: a visual tale meticulously crafted by BlackEye Visuals. Dive into a world where creativity knows no bounds and authenticity reigns supreme
          </p>

        <div className="latest-work__carousel-container">
          <Carousel showArrows={!menuOpen} showIndicators={!menuOpen} showThumbs={false}  showStatus={false} autoPlay={true} infiniteLoop={true} interval={5000} preventMovementUntilSwipeScrollTolerance={true}>
            <div>
                <img src={imageLibrary[44].image} alt="sample" />
                <p>{imageLibrary[44].person}</p>
            </div>
            <div>
                <img src={imageLibrary[51].image} alt="sample" />
                <p>{imageLibrary[51].person}</p>
            </div>
            <div>
                <img src={imageLibrary[53].image} alt="sample" />
                <p>{imageLibrary[53].person}</p>
            </div>
          </Carousel>
        </div>
                  <p className='latest-work__detail'>
        Introducing our latest masterpiece: a visual tale meticulously crafted by BlackEye Visuals. Dive into a world where creativity knows no bounds and authenticity reigns supreme
        </p>
        <img className='latest-work__sample' src={imageLibrary[39].image} alt="portrait" />

      </div>

      
    </section>
  )
}
