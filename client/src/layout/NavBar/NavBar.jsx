import React, { useState, useContext } from 'react';
import AppContext from '../../context/appContext/AppContext';
import { Link, withRouter } from 'react-router-dom';
import styles from './NavBar.module.scss';
import { connect } from 'react-redux';
import { auth } from '../../config/fbConfig';
// import Logo from '../../Assets/logo.png';
// import Logo2 from '../../Assets/logo2.png';
import { toast } from 'react-toastify';

const NavBar = ({ user, history }) => {
  const { theme, setTheme } = useContext(AppContext);
  const [close, setClose] = useState(false);

  const handleAuth = async () => {
    if (user) {
      await auth.signOut();
      toast.success('Sign out Successful');
      history.push('/signin');
    } else {
      history.push('/signin');
    }
  };
  const handleClose = () => {
    setClose(!close);
  };
  return (
    <nav>
      <div
        onClick={() => {
          setClose(true);
        }}
        className={styles.harmburger}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.logo}>
        <Link to='/'>
          <img
            src={
              theme === false
                ? 'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1580722960/logo.png'
                : 'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1580722961/logo2.png'
            }
          />
        </Link>
      </div>
      <div className={styles.links}>
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
      <div className={styles.icons2}>
        <i
          onClick={handleAuth}
          className={`fas ${user ? 'fa-sign-out-alt' : 'fa-sign-in-alt'}`}
        ></i>
        <i
          onClick={setTheme}
          className={theme === true ? `fas fa-sun` : `fas fa-moon`}
        ></i>
        {user && (
          <Link to='/favourites'>
            <i className='fab fa-gratipay'></i>
          </Link>
        )}
        <Link to='/cart'>
          <i className='fas fa-shopping-cart'></i>
        </Link>
      </div>
      <div className={styles.icons}>
        <span onClick={handleAuth}>SIGN {user ? 'OUT' : 'IN'}</span>
        <i
          onClick={setTheme}
          className={theme === true ? `fas fa-sun` : `fas fa-moon`}
        ></i>
        {user && (
          <Link to='/favourites'>
            <i className='fab fa-gratipay'></i>
          </Link>
        )}

        <Link to='/cart'>
          <i className='fas fa-shopping-cart'></i>
        </Link>
      </div>

      <div id={!close ? styles.display : ''} className={styles.menu}>
        <p onClick={handleClose}>X</p>
        <Link onClick={handleClose} to='/'>
          <span>Home</span>
        </Link>
        <Link onClick={handleClose} to='/categories/clothes'>
          <span>Shop</span>
        </Link>
        <Link onClick={handleClose} to='/about'>
          <span>about</span>
        </Link>
        <Link onClick={handleClose} to='/contact'>
          <span>Contact</span>
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
