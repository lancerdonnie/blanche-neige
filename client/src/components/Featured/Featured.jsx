import React from 'react';
import { connect } from 'react-redux';
import styles from './Featured.module.scss';
const Featured = props => {
  console.log(props);
  return (
    <div class={styles.featured}>
      <p class='head1'>FEATURED</p>
      <div class={styles.featuredbox}>
        {props.featured.map(item => {
          return (
            <div class='card'>
              <img src={item.link} alt='' srcset='' />
              <p>{item.name}</p>
              <p>{item.price}$</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = ({ items: { featured } }) => {
  return {
    featured
  };
};
export default connect(mapStateToProps)(Featured);
