import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 style={{fontFamily:"sans-serif" , fontWeight:"bold"}} >Mano Sundar M</h1>
        <h5 className="text-light">MERN - Stack Developer / UI Desginer</h5>
        <HeaderSocials />
        <CTA />
        
        
      </div>
    </header>
  );
};

export default Header;
