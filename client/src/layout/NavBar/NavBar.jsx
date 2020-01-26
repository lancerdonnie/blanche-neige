import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav>
      <div>
        <span>BLANCHE</span>
      </div>
      <div>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>

          <Link to='/categories'>
            <li>Shop</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <span>SIGN IN</span>
        <i className='fas fa-toggle-off'></i>
        <i className='fas fa-shopping-cart'></i>
      </div>
    </nav>
  );
};

export default NavBar;
