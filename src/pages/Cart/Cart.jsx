import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';
import { connect } from 'react-redux';
import { add, reduce, remove } from '../../actions/itemActions';
const Cart = props => {
  const [select, setSelect] = useState(1000);
  const handleImage = (cat, id) => {
    props.history.push(`/categories/${cat}/${id}`);
  };
  const payWithPaystack = () => {
    var handler = window.PaystackPop.setup({
      key: 'pk_test_3b231318d6211d2ff6390a092bfd22e5238ee746',
      email: 'jideadedejifirst@gmail.com',
      amount: calc.price()*100,
      currency: 'NGN',
      metadata: {
        custom_fields: [
          {
            display_name: '',
            variable_name: '',
            value: ''
          }
        ]
      },
      callback: function(response) {
        console.log(response);
        alert('success. transaction ref is ' + response.reference);
      },
      onClose: function() {
        // alert('window closed');
      }
    });
    handler.openIframe();
  };
  const noShopping = () => {
    return (
      <div className={styles.noshopping}>
        <p>You have not added anything to your cart</p>
          <Link to='/categories/clothes'><div>SHOP</div></Link>
      </div>
    );
  };
  const calc = {
    quantity: () => {
      return props.cart.reduce((a, x) => {
        return a + x.quantity;
      }, 0);
    },

    price: () => {
      return props.cart.reduce((a, x) => {
        return a + x.price * x.quantity;
      }, 0);
    }
  };
  const selectChange = e => {
    setSelect(Number(e.target.value));
  };
  return props.cart.length > 0 ? (
    <div className={styles.cart}>
      <div className={styles.div1}>
        <div className={styles.title}>
          <p>Shopping Cart</p>
          <p>{calc.quantity()} items</p>
        </div>
        <div className={styles.divider}></div>
        <table className={styles.main}>
          <thead>
            <tr className={styles.head}>
              <th>PRODUCT DETAILS</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>TOTAL</th>
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
                    <div>
                      <p>{item.name.toUpperCase()}</p>
                      <p>COLOUR {item.choice.toUpperCase()}</p>
                      <p>SIZE {item.selectedSize}</p>
                    </div>
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
                  <td>₦{item.price}</td>
                  <td>₦{item.price * item.quantity}</td>
                  <td>
                    <i
                      onClick={() => props.remove(item.id)}
                      className='fas fa-trash'
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to='/categories/clothes'>
          <p>
            <i className='fas fa-long-arrow-alt-left'></i>
            Continue Shopping
          </p>
        </Link>
      </div>
      <div className={styles.div2}>
        <p>Order Summary</p>
        <div className={styles.divider}></div>
        <div className={styles.details}>
          <div>
            <span>ITEMS {calc.quantity()}</span>
            <span>₦{calc.price()}</span>
          </div>
          <p>SHIPPING*</p>
          <select onChange={selectChange}>
            <option value={1000}>STANDARD DELIVERY - ₦1000</option>
            <option value={2000}>EXPRESS DELIVERY - ₦2000</option>
          </select>
          <p>EMAIL*</p>
          <input placeholder='Enter your email' type='text' />
          {/* <div className={styles.apply}>APPLY</div> */}
          <div className={styles.divider}></div>
          <div className={styles.cost}>
            <span>TOTAL COST</span>
            <span>₦{calc.price() + select}</span>
          </div>
          <div
            onClick={() => {
              payWithPaystack();
            }}
            className={styles.checkout}
          >
            MAKE PAYMENT
          </div>
        </div>
      </div>
    </div>
  ) : (
    noShopping()
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
    },
    remove: id => {
      dispatch(remove(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
