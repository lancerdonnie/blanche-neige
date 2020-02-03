import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.module.scss';
import withLocation from '../../wrappers/withLocation';
const Footer = ({ data }) => {
  return data !== '/signin' ? (
    <footer>
      <div className='socials'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='http://github.com/lancerdonnie'
        >
          <i className='fab fa-github social'></i>
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='http://instagram.com/lancer_donnie'
        >
          <i className='fab fa-instagram social'></i>
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='http://twitter.com/lancer_donnie'
        >
          <i className='fab fa-twitter social'></i>
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='http://facebook.com/adedeji.ifeoluwa1'
        >
          <i className='fab fa-facebook-f social'></i>
        </a>
      </div>
      <div className='site-map'>
        <p>Site Map</p>
        <div>
          <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/categories/clothes'>
              <li>Shop</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <Link to='/contact'>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <p>Copyright 2020 BlancheNeige, LLC</p>
        <p>&nbsp;</p>
      </div>
    </footer>
  ) : null;
};

export default withLocation(Footer);
