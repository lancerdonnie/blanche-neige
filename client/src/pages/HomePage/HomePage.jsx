import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './HomePage.module.scss';
import fashion from '../../Assets/fashion.svg';
import undraw from '../../Assets/undraw.svg';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import Collection from '../../components/Collection/Collection';
import Featured from '../../components/Featured/Featured';

const HomePage = props => {
  const { history, featured, random } = props;
  const handleClick = (category, id) => {
    history.push(`/categories/${category}/${id}`);
  };
  return (
    <Fragment>
      <header>
        <img src={undraw} alt='' />
        <div>
          <img src={fashion} alt='' />
        </div>
      </header>
      <Featured handleClick={handleClick} featured={featured} />
      <Collection />
      <NewArrivals handleClick={handleClick} random={random} />
    </Fragment>
  );
};
const mapStateToProps = ({ items: { featured, random } }) => {
  return {
    featured,
    random
  };
};
export default connect(mapStateToProps)(HomePage);
