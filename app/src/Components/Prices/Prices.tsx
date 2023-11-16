import React from 'react'
import './Prices.css'
import sample from '../../assets/pexels-atahan-demir-14696715 1.png';
import {BsArrowRight} from 'react-icons/bs';
import { imageLibrary } from '../../imageLibrary';
import Picture from '../Picture/Picture';
import LazyLoad from 'react-lazy-load';


export default function Prices() {
  const whatsappOrder = `https://wa.me/48579295460?text=Hi,%20I'd%20love%20to%20book%20a%20photoshoot%20with%20you.`;
  return (
    <section className='feature prices' id='prices'>
      <h1>Prices</h1>
      <div className="prices__display">
        <LazyLoad>
          <Picture image={imageLibrary[0]} />
        </LazyLoad>
        <div className="prices__items">
        <div className='prices__item'>
          <div className='price__title'>
              <h2>Portrait</h2>
              <p>200PLN</p>
          </div>
          <p>
              This includes individual, family, and group portraits, as well as headshots for business and corporate purposes.
          </p>
        </div>
        <div className='prices__item'>
          <div className='price__title'>
              <h2>Lifestyle</h2>
              <p>200PLN</p>
          </div>
          <p>
          One hour of shooting with an agreed number of pictures and price may flactuate depending on the concept of the shoot.
          </p>
        </div>

        <div className='prices__item'>
          <div className='price__title'>
              <h2>Event</h2>
              <p>700PLN</p>
          </div>
          <p>
            Covering various events like corporate events, parties, conferences, and festivals. One hour of shooting with an agreed number of pictures and price may flactuate depending on the concept of the shoot.
          </p>
        </div>

        <div className='prices__item'>
          <div className='price__title'>
              <h2>Wedding</h2>
              <p>2500PLN</p>
          </div>
          <p>
            Capturing the special moments and details of weddings.
          </p>
        </div>
        <a href={whatsappOrder} className='prices__order'>Order Shooting <BsArrowRight/></a>
      </div>
      </div>
    </section>
  )
}
