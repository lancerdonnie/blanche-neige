import React, { Fragment } from 'react';
import './HomePage.module.scss';
import fashion from '../../Assets/fashion.svg';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import Collection from '../../components/Collection/Collection';
import Featured from '../../components/Featured/Featured';
const HomePage = () => {
  return (
    <Fragment>
      <header>
        <div>
          <img src={fashion} alt='' srcset='' />
        </div>
      </header>
      <Featured />
      <Collection />
      <NewArrivals />
    </Fragment>
  );
};

export default HomePage;
