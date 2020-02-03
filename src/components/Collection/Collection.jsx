import React from 'react';
import styles from './Collection.module.scss';

const Collection = ({ history }) => {
  const handleClick = e => {
    console.log(e.target.getAttribute('name'));
    history.push('/categories/' + e.target.getAttribute('name'));
  };
  return (
    <div className={styles.collection}>
      <p className='head1'>COLLECTION</p>
      <div onClick={handleClick} className={styles.collectionbox}>
        <div name='clothes'></div>
        <div name='bags'></div>
        <div name='shoes'></div>
        <div name='jewellery'></div>
        {/* <div>WOMEN</div>
        <div>MEN</div> */}
      </div>
    </div>
  );
};

export default Collection;
