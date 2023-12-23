import React from 'react'
import { imageLibrary } from '../../imageLibrary'
import Picture from '../Picture/Picture'
import './MorePictures.css';

export default function MorePictures() {
  return (
    <section className='more-projects'>
      <header className='more-projects__header'>
        <h1>Blackeye Visuals</h1>
      </header>
      <ul>
        {imageLibrary.map(image => <li><Picture image={image} /></li>)}
      </ul>
    </section>
  )
}
