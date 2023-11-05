import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sample from '../../assets/Rectangle 24.png'

export default function Reviews() {
  return (
    <section className='feature'>
        <h1>Reviews</h1>
        <Carousel>
            <div>
                <img src={sample} alt="sample" />
                <p>Lorem ipsum dolor sit amet.</p>
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
    </section>
  )
}
