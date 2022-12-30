import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/pfp.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello! I am</h5>
        <h1>Vishwas Latiyan</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt='ME'/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header