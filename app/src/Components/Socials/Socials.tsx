import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import './Socials.css'

export default function Socials() {
  return (
    <div className='socials'>
      <button><AiOutlineInstagram/></button>
      <button><MdEmail/></button>
      <button><FaWhatsapp/></button>
    </div>
  )
}
