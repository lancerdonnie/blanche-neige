import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import { connect } from 'react-redux';
import { add } from '../../actions/itemActions';
import { reduce } from '../../actions/itemActions';

const Cart = props => {
  const handleImage = (cat, id) => {
    props.history.push(`/${cat}/${id}`);
  };
  return (
    <div className={styles.cart}>
      <div className={styles.div1}>
        <div className={styles.title}>
          <p>Shopping Cart</p>
          <p>{props.cart.length} items</p>
        </div>
        <table className={styles.main}>
          <thead>
            <tr className={styles.head}>
              <th >product details</th>
              <th>quantity</th>
              <th>price</th>
              <th>total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.cart.map((item, i) => {
              return (
                <tr key={item.id} className={styles.content}>
                  <td>
                    <img
                      onClick={() => handleImage(item.category, item.id)}
                      src={item.link}
                      alt='loading'
                    />
                    <p>{item.name}</p>
                  </td>
                  <td className={styles.val}>
                    <i
                      onClick={() => props.add(item.id)}
                      className='fas fa-plus'
                    ></i>
                    <span>{item.quantity}</span>
                    <i
                      onClick={() => props.reduce(item.id)}
                      className='fas fa-minus'
                    ></i>
                  </td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <i className='fas fa-trash'></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to='/shop'>
          <p>
            <i className='fas fa-long-arrow-alt-left'></i>
            Continue Shopping
          </p>
        </Link>
      </div>
      <div className={styles.div2}>
        <p>Order Summary</p>
        <div className='details'>
          <div>
            <span>ITEMS 3</span>
            <span>$457.98</span>
          </div>
          <p>SHIPPING</p>
          <p>STANDARD DELIVERY - $5</p>
          <p>PROMO CODE</p>
          <input placeholder='Enter your code' type='text' />
          <div>apply</div>
          <div>
            <span>TOTAL COST</span>
            <span>$457.98</span>
          </div>
          <div>CHECKOUT</div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ items: { cart } }) => {
  return {
    cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: id => {
      dispatch(add(id));
    },
    reduce: id => {
      dispatch(reduce(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
