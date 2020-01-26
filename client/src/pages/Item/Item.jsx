import React, { Fragment } from 'react';
import styles from './Item.module.scss';
import { connect } from 'react-redux';
const Item = props => {
  const {
    category,
    name,
    price,
    description,
    size,
    link
  } = props.featured_item;
  return (
    <Fragment>
      <div className={styles.previous}>
        <img src={link} alt='loading' />
        <div>
          <i className='fas fa-arrow-left'></i>
          <span>PREVIOUS</span>
        </div>
      </div>
      <div className={styles.next}>
        <img src={link} alt='loading' />
        <div>
          <span>NEXT</span>
          <i className='fas fa-arrow-right'></i>
        </div>
      </div>
      <div className={styles.product + ' card'}>
        <img src={link} alt='loading' />
        <div>
          <p>{category.toUpperCase()}</p>
          <p>{name}</p>
          <p>{price}$</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, totam dicta. Unde harum sint tenetur delectus debitis
            quaerat obcaecati deleniti eum? Amet deleniti consequatur nesciunt
            dolores exercitationem alias illum optio.Aliquam voluptas at
            incidunt id facere, esse odit impedit harum neque! Aliquid magni
          </p>
          <div className={styles.choice}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>SELECT SIZE</p>
          <div className={styles.check}>
            <div className={styles.check1 + ' card'}>
              <span>UK {size[0]}</span>
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
const mapStateToProps = ({ items: { featured } }, ownProps) => {
  return {
    featured_item: featured.find(item => {
      return item.id === Number(ownProps.match.params.id);
    })
  };
};
export default connect(mapStateToProps)(Item);
