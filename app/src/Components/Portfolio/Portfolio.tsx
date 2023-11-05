import React from 'react'
import sample from '../../assets/portrait 1.png'
import sample2 from '../../assets/Rectangle 13.png'
import './Portfolio.css'
import {BsArrowRight} from 'react-icons/bs';


export default function Portfolio() {
  return (
    <section className='feature portfolio'>
      <h1>Portfolio</h1>
      <img src={sample} alt="portrait" />
      <p>
      Thought years of experience, I have honed my skills in composition, lighting, and post-production to produce stunning visuals that showcase the beauty of my subjects. Whether it's a portrait, landscape, or event, I approach each project with passion and dedication, striving to deliver images that exceed my clients' expectations. 
      </p>
      <img src={sample2} alt="portrait" />
      <button>See All Portfolio <BsArrowRight /></button>
    </section>
  )
}
