import React from 'react'
import './LatestWork.css'
import sample from '../../assets/Rectangle 15.png'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function LatestWork() {
  return (
    <section className='feature latest-work'>
      <h1>My Latest Work's</h1>
      <p>
      Photography has always been considered a form of magic, as it captures moments of the past, present and future, preserving them for eternity. It has the ability to capture emotions, memories, and expressions of people, places, and things in a way that surpasses other art forms, creating a world of beauty, wonder, and discovery.
      </p>
      <Carousel>
        <div>
            <img src={sample} alt="sample" />
            <p>Image 1</p>
        </div>
        <div>
            <img src={sample} alt="sample" />
            <p>Image 2</p>
        </div>
        <div>
            <img src={sample} alt="sample" />
            <p>Image 3</p>
        </div>
      </Carousel>

      
    </section>
  )
}
