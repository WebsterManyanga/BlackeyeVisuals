import React from 'react'
import './Header.css'
import Socials from '../Socials/Socials'
import {BsArrowRight} from 'react-icons/bs';

export default function Header() {
  return (
    <header className='header'>
        <div className='header__text'>
            <h1>Blackeye Visuals</h1>
            <button>Read More <BsArrowRight/></button>
        </div>
        <Socials />
    </header>
  )
}
