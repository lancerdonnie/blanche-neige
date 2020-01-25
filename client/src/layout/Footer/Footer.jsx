import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.module.scss';
const Footer = () => {
  return (
    <footer>
      <div class='socials'>
        <Link to=''>
          <i class='fab fa-soundcloud social'></i>
        </Link>
        <Link to=''>
          <i class='fab fa-instagram social'></i>
        </Link>
        <Link to=''>
          <i class='fab fa-twitter social'></i>
        </Link>
        <Link to=''>
          <i class='fab fa-facebook-f social'></i>
        </Link>
      </div>
      <div class='site-map'>
        <p>Site Map</p>
        <ul>
          <li>Home</li>
          <Link to=''>
            <li>Shop</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <p>Copyright 2020 BlancheNeige, LLC</p>
        <p>&nbsp;</p>
      </div>
    </footer>
  );
};

export default Footer;
