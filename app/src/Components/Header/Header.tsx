import React, { useRef, useState } from 'react'
import './Header.css'
import Socials from '../Socials/Socials'
import {BsArrowRight} from 'react-icons/bs';
import {slide as Menu} from 'react-burger-menu'
import { useGlobalState } from '../../state';
import bg1_mobile from '../../assets/min/A-31.jpg'
import bg1_desktop from '../../assets/min/A-31(2).jpg'
import bg2_mobile from '../../assets/min/A-21.jpg'
import bg2_desktop from '../../assets/min/A-21.jpg'
import Media from 'react-media';



export default function Header() {
  
  const [menuOpen, setMenuOpen] = useGlobalState('menuOpen');
  const [socialsActive, setSocialsActive] = useGlobalState('socialsActive');
  const [background, setBackground] = useState('bg1');

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const showContacts = (show: boolean) => {
    setSocialsActive(show);
  }

  const menuIsOpen = () =>  {
    setMenuOpen(true);
    showContacts(false);
  }

  const menuIsClosed = () => {
    setMenuOpen(false);
  }

  const zIndex = menuOpen ? {'zIndex': '0'} : {'zIndex': '1'};

  return (
    <>
      <header className={`header ${background}`} id='home'>
        <nav className='header__nav'>
          <Menu isOpen={menuOpen} onOpen={menuIsOpen} onClose={() => menuIsClosed()}>
            <a href="#home" onClick={() => closeMenu()}>Home</a>
            <a href="#portfolio" onClick={() => closeMenu()}>Portfolio</a>
            <a href="#recents" onClick={() => closeMenu()}>Recent Work</a>
            <a href="#prices" onClick={() => closeMenu()}>Prices</a>
            <a href="#reviews" onClick={() => closeMenu()}>Reviews</a>
            <a href='#home' onClick={() => {closeMenu(); setSocialsActive(true)}}>Contacts</a>
          </Menu>
          <a className='nav__item' href='#portfolio'>Portfolio</a>
          <a className='nav__item' href='#prices'>Service & Price</a>
          <a className='nav__item' href='#home' onClick={() => setSocialsActive(!socialsActive)}>Contact</a>
        </nav>
        <div className='header__text' style={zIndex}>
            <h1>Blackeye Visuals</h1>
            <p>We offer a range of photographic experiences tailored to your unique needs. From stunning portraits and heartfelt weddings to dynamic events and striking commercial campaigns, our lens brings your story to life</p>
            <a href='#portfolio' className='header__readmore'>Read More <BsArrowRight/></a>
        </div>
        <Socials />
      </header>
    </>
  )
}
