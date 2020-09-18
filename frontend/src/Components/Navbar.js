import React, { useState } from "react";
import logo from '../images/sapphirelogo.svg';
import { animateScroll as scroll } from "react-scroll";
import Services from './Tabs/Services';
import About from './Tabs/About';
import Philantrophy from './Tabs/Philantrophy';
import {FaBars} from 'react-icons/fa';
import 'foundation-sites';

const scrollToTop = () => { scroll.scrollToTop() }

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} className='nav-logo' alt='logo' onClick={scrollToTop}/>
      <button className='toggle-button' onClick={() => setToggle(!toggle)}>
        <FaBars size="2.5rem"/>
      </button>
      <div className={toggle ? 'active navbar-links': 'navbar-links'}>
        <ul>
          <Services/>
          <About/>
          <Philantrophy/>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;