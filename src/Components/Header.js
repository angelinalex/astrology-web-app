import React from 'react';
import header_img from '../assets/headerimg.png';
import './Header.css'

const Header = () => {
  return (
    <div className='header_div'>
        <img className = "h_picture"  src={header_img} ></img>
      
    </div>
  )
}

export default Header
