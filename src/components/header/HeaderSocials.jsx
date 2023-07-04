import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/manosundarmanivel/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/manosundarmanivel" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://youtube.com/@manosundarm" target="_blank" rel="noreferrer" ><FaYoutube/></a>
      <a href="https://youtube.com/@manosundarm" target="_blank" rel="noreferrer" ><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials