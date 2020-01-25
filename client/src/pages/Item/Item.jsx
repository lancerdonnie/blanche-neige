import React, { Fragment } from 'react';
import styles from './Item.module.scss';
const Item = props => {
  console.log(props.match.params.id);
  return (
    <Fragment>
      <div className={styles.previous}></div>
      <div className={styles.next}></div>
      <div className={styles.product + ' card'}>
        <div></div>
        <div>
          <p>SHOES</p>
          <p>REACT ELEMENT 55</p>
          <p>$500</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, totam dicta. Unde harum sint tenetur delectus debitis
            quaerat obcaecati deleniti eum? Amet deleniti consequatur nesciunt
            dolores exercitationem alias illum optio.Aliquam voluptas at
            incidunt id facere, esse odit impedit harum neque! Aliquid magni
            molestiae numquam nulla debitis dolores veritatis dolorem, a
            perspiciatis. Corrupti neque, unde enim sed dicta cum accusantium.
          </p>
          <div className={styles.choice}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>SELECT SIZE</p>
          <div className={styles.check}>
            <div className={styles.check1 + ' card'}>
              <span>UK 2.5</span>
              <i className='fas fa-chevron-down'></i>
            </div>
            <div className={styles.check2}>
              <i className='fas fa-cart-plus'></i>
              <span>Add to cart</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
