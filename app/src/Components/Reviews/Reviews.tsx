import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sample from '../../assets/Rectangle 24.png'
import './Reviews.css'

export default function Reviews() {
  return (
    <section className='reviews' id='reviews'>
        <h1>Reviews</h1>
        <div className="reviews__content">
            <div className="reviews__carousel-container">
                <Carousel showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={5000} preventMovementUntilSwipeScrollTolerance={true} showIndicators={false}>
                    <div>
                        <img src={sample} alt="sample" />
                        <p>"Lorem ipsum dolor sit amet."</p>
                    </div>
                    <div>
                        <img src={sample} alt="sample" />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div>
                        <img src={sample} alt="sample" />
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Carousel>
            </div>
            <div className="reviews__messages">
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis iure fugiat?"</p>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis iure fugiat?"</p>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis iure fugiat?"</p>
            </div>
        </div>
    </section>
  )
}
