import React from "react";
import './Footer.css';
import { Link } from 'react-router-dom';

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="footer-container">
      <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <p>Site made by : <span className=" text-black fw-bold">Fakrul Ibne Hassan</span></p>
        <ul class="social-icon">
          <li class="social-icon__item">
            <p>Socials: </p>
          </li>
          <li class="social-icon__item">
            <Link class="social-icon__link" to='https://www.facebook.com/nabil.hassan.3726' target="_blank">
              <FaFacebook></FaFacebook>
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
            </Link>
          </li>
          <li class="social-icon__item">
            <Link class="social-icon__link" to='https://github.com/NabilHassan7' target="_blank">
              <FaGithub></FaGithub>
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
            </Link>
          </li>
          <li class="social-icon__item">
            <Link class="social-icon__link" to='https://www.linkedin.com/in/fakrul-ibne-hassan/' target="_blank">
              <FaLinkedin></FaLinkedin>
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
            </Link>
          </li>
        </ul>
        {/* <ul class="menu">
          <li class="menu__item">
            <a class="menu__link" href="#">
              Home
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              About
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Services
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Team
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="#">
              Contact
            </a>
          </li>
        </ul> */}
        <p>&copy;2023 <span className=" site-title">BLOG VAULT</span> -- All Rights Reserved</p>
      </footer>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Footer;
