import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import { CgTwitter } from "react-icons/cg";

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#header" className="footer__logo">
          NEGUE KWAHAM GRACE
        </a>

        <ul className="permalinks">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__media">
          <a href="https://linkedin.com" target="https://www.linkedin.com/in/negue-kwaham-mael-grace-2a87a7269/">
            <BsLinkedin />
          </a>
          <a href="https://github.com" target="https://github.com/Grace422/MyPortfolio.git">
            <FaGithub />
          </a>
          <a href="https://facebook.com" target="https://www.facebook.com/profile.php?id=100073594094491">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="https://twitter.com/KwahamGrace">
            <CgTwitter />
          </a>
        </div>

        <div className="copyRight">
            <h3>@copyright BD 2023</h3>
        </div>
      </div>
    );
}

export default Footer
