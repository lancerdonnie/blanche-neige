import React from 'react';
import styles from './NewArrivals.module.scss';

const NewArrivals = ({ random, handleClick }) => {
  return (
    <div className={styles.newarrivals}>
      <p className='head1'>NEW ARRIVALS</p>
      <div className={styles.arrivalsbox}>
        {random.map(item => {
          return (
            <div
              onClick={() => {
                handleClick(item.category, item.id);
              }}
              key={item.id}
              className={styles.arrival}
            >
              <div>
                <img alt='loading' src={item.link} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.price}$</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
