import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.module.scss';
const Footer = () => {
  return (
    <footer>
      <div className='socials'>
        <Link to=''>
          <i className='fab fa-soundcloud social'></i>
        </Link>
        <Link to=''>
          <i className='fab fa-instagram social'></i>
        </Link>
        <Link to=''>
          <i className='fab fa-twitter social'></i>
        </Link>
        <Link to=''>
          <i className='fab fa-facebook-f social'></i>
        </Link>
      </div>
      <div className='site-map'>
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
