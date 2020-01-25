import React from 'react';
import styles from './Collection.module.scss';

const Collection = () => {
  console.log(styles);
  return (
    <div className={styles.collection}>
      <p className='head1'>COLLECTION</p>
      <div className={styles.collectionbox}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Collection;
