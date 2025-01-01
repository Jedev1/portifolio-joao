import React from 'react'

import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container-footer">
            <div className="text-footer">
                <h4 className="text-title">João Enrique &copy; Todos os direitos reservados; 2025.</h4>
            </div>
            <div className="socials-medias-footer">
                <ul className="menu-social-media">
                    <li><a href="https://www.youtube.com/@Devlag" target='_blank'><BiLogoYoutube /></a></li>
                    <li><a href="https://www.linkedin.com/in/jo%C3%A3o-enrique/" target='_blank'><BiLogoLinkedinSquare /></a></li>
                    <li><a href="https://www.instagram.com/devlag_/" target='_blank'><BiLogoInstagramAlt /></a></li>
                    <li><a href="https://github.com/Jedev1" target='_blank'><BiLogoGithub /></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer