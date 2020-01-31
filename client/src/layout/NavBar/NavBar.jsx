import React, { useEffect, useContext } from 'react';
import AppContext from '../../context/appContext/AppContext';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.module.scss';
import { connect } from 'react-redux';
import { auth } from '../../config/fbConfig';
import Logo from '../../Assets/logo.png';
import { toast } from 'react-toastify';

const NavBar = ({ user, history }) => {
  const { theme, setTheme } = useContext(AppContext);
  // useEffect(() => {
  //   console.log(theme)
  // }, [theme]);
  const handleAuth = async () => {
    await auth.signOut();
    toast.success('Sign out Successful');
    history.push('/signin');
  };
  return (
    <nav>
      <div>
        <Link to='/'>
          <span>BLANCHE</span>
          {/* <img src={Logo} /> */}
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
          <Link to='/about'>
            <li>About</li>
          </Link>

          <li>Contact</li>
        </ul>
      </div>
      <div>
        <span onClick={handleAuth}>SIGN {user ? 'OUT' : 'IN'}</span>

        {/* <i className='fas fa-toggle-off'></i> */}
        <i
          onClick={setTheme}
          className={theme === true ? `fas fa-sun` : `fas fa-moon`}
        ></i>
        <Link to='/cart'>
          <i className='fas fa-shopping-cart'></i>
        </Link>
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    user: state.log.user
  };
};
export default connect(mapStateToProps)(withRouter(NavBar));
