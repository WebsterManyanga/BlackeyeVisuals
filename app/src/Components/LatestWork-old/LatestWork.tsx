import React from 'react'
import './LatestWork.css'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGlobalState } from '../../state';
import { imageLibrary } from '../../imageLibrary';
import Picture from '../Picture/Picture';


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
                <Picture image={imageLibrary[54]} />
                <p></p>
              </div>
              <div>
                <Picture image={imageLibrary[54]} />
                <p></p>
              </div>
              <div>
                  <Picture image={imageLibrary[53]} />
                  <p></p>
              </div>
            </Carousel>
        </div>
          <Picture extraClasses='latest-work__sample' image={imageLibrary[33]} />
      </div>

      
    </section>
  )
}
