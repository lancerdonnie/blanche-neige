import React from 'react';
import { connect } from 'react-redux';
import styles from './HomePage.module.scss';
// import undraw from '../../Assets/undraw.svg';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import Collection from '../../components/Collection/Collection';
import Featured from '../../components/Featured/Featured';
import Spinner from '../../layout/Spinner/Spinner';

const HomePage = props => {
  const { history, featured, random, auth } = props;
  const handleClick = (category, id) => {
    history.push(`/categories/${category}/${id}`);
  };
  return auth === null ? (
    <Spinner big />
  ) : (
    <div className={styles.home}>
      <header>
        <p></p>
        <span>DRIP</span>
        <span>ELEGANCE</span>
        <img
          src={
            'https://res.cloudinary.com/dtyrfo0fx/image/upload/v1580722964/undraw.svg'
          }
          alt=''
        />
      </header>
      <Featured handleClick={handleClick} featured={featured} />
      <Collection history={props.history} />
      <NewArrivals handleClick={handleClick} random={random} />
    </div>
  );
};
const mapStateToProps = ({ items: { featured, random }, log: { auth } }) => {
  return {
    featured,
    random,
    auth
  };
};
export default connect(mapStateToProps)(HomePage);
