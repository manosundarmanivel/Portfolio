import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  
  
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Mano Sundar M</a>
      
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/manosundarmanivel/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/manosundarmanivel" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://youtube.com/@manosundarm" target="_blank" rel="noreferrer" ><FaYoutube/></a>
      <a href="https://youtube.com/@manosundarm" target="_blank" rel="noreferrer" ><FaInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Mano Sundar All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
