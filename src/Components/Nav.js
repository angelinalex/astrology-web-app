import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className='nav-container'>  
    <nav>
      <ul className='nav-list'>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Nav;
