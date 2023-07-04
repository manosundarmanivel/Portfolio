import React from 'react';
import IMG1 from '../../assets/s4.jpg';
import IMG2 from '../../assets/Home.jpg';
import IMG3 from '../../assets/t1.jpg';
import IMG4 from '../../assets/r1.jpg';
import IMG5 from '../../assets/py2.jpg';
import IMG6 from '../../assets/n1.jpg';
import IMG7 from '../../assets/a1.jpg';
import IMG8 from '../../assets/a2.jpg';
import IMG10 from '../../assets/a4.jpg';
import IMG11 from '../../assets/a5.jpg';
import IMG12 from '../../assets/a6.jpg';
import IMG13 from '../../assets/a3.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Spotify Spacial UI - Apple Vison Pro',
      img: IMG1,
      description:
        'BookStore app that allows users to store books and update progress',
      technologies: 'Figma',
      link: '',
      github: '',
    },
    {
      id: 2,
      title: 'Swiggy Clone Website',
      img: IMG4,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | BootStarp | MongoDB',
      link: '',
      github: '',
    },
    {
      id: 3,
      title: 'Virtual Academy - UI/UX',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'Figma',
      link: '',
      github: '',
    },
    {
      id: 4,
      title: 'Dashboard UI - TestPrep App',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'Figma',
      link: '',
      github: '',
    },
    {
      id: 5,
      title: 'LinkedIn - Employee Finder',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'React | Python | MongoDB',
      link: '',
      github: '',
    },
    {
      id: 6,
      title: 'NPM Package - Offline / Online',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'React',
      link: '',
      github: '',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn "
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>

      <section id="portfolio" >
      
      <h2>Awards</h2>
      <div className="container portfolio__container">
   
          <article className="portfolio__item" >
            <div className="portfolio__item-image">
              <img src= {IMG7} alt="img" />
            </div>
            <div className="portfolio__item-content">
              <h3 style={{paddingTop:10}} >Best Student Award - @KEC 2021</h3>
              
            </div>
            <div className="portfolio__item-cta">
             
              <a
                href="https://www.linkedin.com/posts/manosundarmanivel_beststudent-award-konguengineeringcollege-activity-6945200008828792833-rFwW?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="btn "
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            </div>
          </article>
          <article className="portfolio__item" >
            <div className="portfolio__item-image">
              <img src= {IMG8} alt="img" />
            </div>
            <div className="portfolio__item-content">
              <h3 style={{paddingTop:10}} >Best Project Award - @KEC 2022</h3>
              
            </div>
            <div className="portfolio__item-cta">
             
              <a
                href="https://www.linkedin.com/posts/manosundarmanivel_39th-annual-day-activity-7058429806303989760-0Kq_?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            </div>
          </article>
          <article className="portfolio__item" >
            <div className="portfolio__item-image">
              <img src= {IMG11} alt="img" />
            </div>
            <div className="portfolio__item-content">
              <h3 style={{paddingTop:10}} >I - Create Entrepreneurship WorkShop</h3>
              
            </div>
            <div className="portfolio__item-cta">
             
              <a
                href="https://www.linkedin.com/posts/manosundarmanivel_bootcamp-entrepreneurship-startup-activity-7037758596872372224-zxzc?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="btn "
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            </div>
          </article>

          <article className="portfolio__item" >
            <div className="portfolio__item-image">
              <img src= {IMG10} alt="img" />
            </div>
            <div className="portfolio__item-content">
              <h3 style={{paddingTop:10}} >Webtrix - 2021 @ CEG</h3>
              
            </div>
            <div className="portfolio__item-cta">
             
              <a
                href="https://www.linkedin.com/posts/manosundarmanivel_websitedevelopment-hackathon-firstplace-activity-6928994470705209344-1ecZ?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="btn "
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            </div>
          </article>

          <article className="portfolio__item" >
            <div className="portfolio__item-image">
              <img src= {IMG12} alt="img" />
            </div>
            <div className="portfolio__item-content">
              <h3 style={{paddingTop:10}} >NewsLetter @ KEC 2022</h3>
              
            </div>
            <div className="portfolio__item-cta">
             
              <a
                href="https://www.linkedin.com/posts/manosundarmanivel_csea-activity-7059226139331883008-vrRT?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            </div>
          </article>
      
          <article className="portfolio__item" >
            <div className="portfolio__item-image">
              <img src= {IMG13} alt="img" />
            </div>
            <div className="portfolio__item-content">
              <h3 style={{paddingTop:10}} >KPIT Sparkle - 2022</h3>
              
            </div>
            <div className="portfolio__item-cta">
             
              <a
                href="https://www.linkedin.com/posts/manosundarmanivel_had-a-very-good-experience-and-great-learning-activity-7005701260381229057-LSo0?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                View LinkedIn
              </a>
            </div>
          </article>
      </div>
      
      </section>
    </section>
    
  );
};

export default Portfolio;
