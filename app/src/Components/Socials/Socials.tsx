import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import './Socials.css'
import { useGlobalState } from '../../state'

export default function Socials() {
  
  const [socialsActive, setSocialsActive] = useGlobalState('socialsActive');


  let instaLink = 'https://www.instagram.com/blackeye_visuals_/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==';
  let phoneLink = 'https://wa.me/48579295460';
  let emailLink = 'mailto: webster.zw@gmail.com';


  return (
    <div className='socials'>
      <a href={instaLink} className={`${socialsActive && 'socials__insta socials__bigger'}`}><AiOutlineInstagram/></a>
      <a href={emailLink} className={`${socialsActive && 'socials__email socials__bigger'}`}><MdEmail/></a>
      <a href={phoneLink} className={`${socialsActive && 'socials__whatsapp socials__bigger'}`}><FaWhatsapp/></a>
    </div>
  )
}
