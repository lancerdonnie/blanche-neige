import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.module.scss';
import withLocation from '../../wrappers/withLocation';
const NavBar = ({ data }) => {
  return data !== '/sign' ? (
    <nav>
      <div>
        <Link to='/'>
          <span>BLANCHE</span>
        </Link>
      </div>
      <div>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>

          <Link to='/categories/clothes'>
            <li>Shop</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <Link to='/signin'>
          <span>SIGN IN</span>
        </Link>

        <i className='fas fa-toggle-off'></i>
        <Link to='/cart'>
          <i className='fas fa-shopping-cart'></i>
        </Link>
      </div>
    </nav>
  ) : null;
};

export default withLocation(NavBar);
