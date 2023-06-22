import React from 'react'
import './about.css'
import moi from '../../assets/team1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Grace " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1 Year</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>2 world widely</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>2 Completed</small>
              </article>
            </div>
            <p>
              I am a student at the university of buea, studing computer enginnering
              at the Faculty of Engineering and Technology (FET). My main interest is 
              on web and app development, but i am also interested in artificial
              intelligence. I learn various technologies like react, javaScript. 
              I am still learning and also implementing various personal projects
              so as to acquire more knowledge and experience to help me adapt
              easily into the real world. I can express myself both in English
              and french.  
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's chat
            </a>
          </div>
        </div>
      </section>
    );
}

export default About