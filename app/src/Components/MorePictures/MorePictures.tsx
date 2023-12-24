import React, { useEffect, useState } from 'react'
import { imageLibrary } from '../../imageLibrary'
import Picture from '../Picture/Picture'
import './MorePictures.css';
 

export default function MorePictures() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {window.removeEventListener('resize', handleWindowResize)};
  }, []);

  const breakBlocks = () => {
    if (windowWidth >= 768) {
      
      const blocks = [imageLibrary.slice(0, imageLibrary.length / 3), imageLibrary.slice(imageLibrary.length / 3, imageLibrary.length / (3/2)), imageLibrary.slice(imageLibrary.length / (3/2), imageLibrary.length) ];
      return blocks;
    }   
    const blocks = [imageLibrary.slice(0, imageLibrary.length / 2), imageLibrary.slice(imageLibrary.length / 2, imageLibrary.length)];
    return blocks;   
  }

  const splitImageBlocks = breakBlocks(); 
  const layoutCssClass = windowWidth >= 768 ? 'more-projects__pictures--lg' : 'more-projects__pictures--sm'

  return (
    <section className='more-projects'>
      <header className='more-projects__header'>
        <h1>Blackeye <span>V</span>isuals</h1>
      </header>'
      <div className={`more-projects__pictures ${layoutCssClass}`} >
        {splitImageBlocks.map(block => <ul>{block.map(image => <li><Picture image={image} /></li>)}</ul>)}
      </div>
    </section>
  )
}


