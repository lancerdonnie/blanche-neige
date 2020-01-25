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
          <li>Home</li>
          <Link to=''>
            <li>Shop</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <span>SIGN IN</span>
        <i class='fas fa-toggle-off'></i>
        <i class='fas fa-shopping-cart'></i>
      </div>
    </nav>
  );
};

export default NavBar;
