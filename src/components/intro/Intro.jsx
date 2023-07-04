import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me5.png';

import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div >
            <img style={{borderRadius:"20px"}} src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>Welcome to my portfolio website! I'm a highly motivated and passionate CSE student specializing in web development, app development, and content creation. With a strong foundation in programming languages like HTML, CSS, JavaScript, and Python, I create exceptional digital experiences that captivate and engage visitors. I thrive on turning innovative ideas into visually stunning and functional websites, ensuring high standards of performance, accessibility, and compatibility. As an adept app developer and content creator, I excel at producing intuitive mobile experiences and compelling articles. Let's connect and create exceptional digital experiences together!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro