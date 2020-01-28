import React from 'react';
import styles from './Featured.module.scss';
const Featured = ({ featured, handleClick }) => {
  return (
    <div className={styles.featured}>
      <p className='head1'>FEATURED</p>
      <div className={styles.featuredbox}>
        {featured.map((item, i) => {
          return (
            i < 4 && (
              <div
                onClick={() => {
                  handleClick(item.category, item.id);
                }}
                key={item.id}
                className='card'
              >
                <img src={item.link} alt='' />
                <div>
                  <p>{item.name}</p>
                  <p>{item.price}$</p>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
export default Featured;
