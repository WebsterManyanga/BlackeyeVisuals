import React from 'react'
import './Prices.css'
import sample from '../../assets/pexels-atahan-demir-14696715 1.png';
import {BsArrowRight} from 'react-icons/bs';

export default function Prices() {
  return (
    <section className='feature prices'>
      <h1>Prices</h1>
      <img src={sample} alt="image" />
      <div className='prices__item'>
        <div className='price__title'>
            <h2>Portrait</h2>
            <p>$220</p>
        </div>
        <p>
            This includes individual, family, and group portraits, as well as headshots for business and corporate purposes.
        </p>
      </div>
      <div className='prices__item'>
        <div className='price__title'>
            <h2>Individual</h2>
            <p>$300</p>
        </div>
        <p>
        An individual photoshoot offers an opportunity for someone to have a professional photographer capture their unique personality and style through a series of posed and candid shots.
        </p>
      </div>

      <div className='prices__item'>
        <div className='price__title'>
            <h2>Fashion</h2>
            <p>$350</p>
        </div>
        <p>
            A fashion photoshoot is a creative process in which a team of professionals collaborates to produce images that showcase clothing, accessories, or a particular style.
        </p>
      </div>
      <button>Order Shooting <BsArrowRight/></button>
    </section>
  )
}
