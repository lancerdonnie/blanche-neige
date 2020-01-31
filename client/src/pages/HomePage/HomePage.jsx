import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './HomePage.module.scss';
import fashion from '../../Assets/fashion.svg';
import undraw from '../../Assets/undraw.svg';
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
    <Fragment>
      <header>
        <p></p>
        <span>DRIP</span>
        <span>ELEGANCE</span>
        <img src={undraw} alt='' />
        {/* <div><img src={fashion} alt='' /></div> */}
      </header>
      <Featured handleClick={handleClick} featured={featured} />
      <Collection history={props.history} />
      <NewArrivals handleClick={handleClick} random={random} />
    </Fragment>
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
