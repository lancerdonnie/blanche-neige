import React from 'react';
import styles from './NewArrivals.module.scss';

const NewArrivals = () => {
  return (
    <div className={styles.newarrivals}>
      <p className='head1'>NEW ARRIVALS</p>
      <div className={styles.arrivalsbox}>
        <div className={styles.arrival}></div>
        <div className={styles.arrival}></div>
        <div className={styles.arrival}></div>
        <div className={styles.arrival}></div>
        <div className={styles.arrival}></div>
        <div className={styles.arrival}></div>
      </div>
    </div>
  );
};

export default NewArrivals;
