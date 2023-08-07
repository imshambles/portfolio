import React from 'react'
import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer'>
      <a className='footer_logo' href='#'>Vishwas Latiyan</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#services'>Education</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://instagram.com/vishwaslatiyan' target='_blank' rel='noreferrer'><FiInstagram /></a>
        <a href='https://twitter.com/VishwasLatiyan' target='_blank' rel='noreferrer'><IoLogoTwitter /></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Vishwas Latiyan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer