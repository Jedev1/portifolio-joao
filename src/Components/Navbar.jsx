import React, { useState } from 'react'
import Logo from '../assets/logo.ico'

import { BiLogoYoutube,  
        BiLogoLinkedinSquare, 
        BiLogoInstagramAlt, 
        BiLogoGithub, 
        BiMenu, 
        BiX } 
from "react-icons/bi";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


  return (
    <header className="header">
        <div className="logo">
            <a href="#"><img src={Logo} alt="Logo" /> <span>Portifólio</span></a>
        </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>Sobre mim</a></li>
          <li><a href="#project" onClick={toggleMenu}>Projetos</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
        </ul>

        <div className="social-medias">
            <ul className="social">
                <li><a href="https://www.youtube.com/@Devlag" target='_blank'><BiLogoYoutube /></a></li>
                <li><a href="https://www.linkedin.com/in/jo%C3%A3o-enrique/" target='_blank'><BiLogoLinkedinSquare /></a></li>
                <li><a href="https://www.instagram.com/devlag_/" target='_blank'><BiLogoInstagramAlt /></a></li>
                <li><a href="https://github.com/Jedev1" target='_blank'><BiLogoGithub /></a></li>
            </ul>
        </div>
      </nav>

        <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <BiX/>: <BiMenu/>}
        </div>
    </header>
  )
}

export default Navbar