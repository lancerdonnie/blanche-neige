import React, { useState } from 'react';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const [order, setOrder] = useState(true);
  const handleClick = () => {
    setOrder(!order);
  };
  return (
    <div className={styles.signin}>
      <div className={order ? styles.div1 : styles.div2}>
        <p>Sign {order ? 'in' : 'up'}</p>
        <span>Sign {order ? 'in' : 'up'} with google</span>
        {order && <p>or use your account</p>}
        <form action='' type='submit'>
          {!order && <input type='text' placeholder='Name' />}
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Password' />
          {!order && <input type='text' placeholder='Confirm Password' />}
        </form>
        {order && <p>Forgot your password?</p>}
        <div>SIGN {order ? 'IN' : 'UP'}</div>
      </div>
      <div className={order ? styles.div2 : styles.div1}>
        <p>{order ? 'Hello Friend!' : ' Welcome Back!'}</p>
        <div>
          <p>
            {order
              ? 'Enter your personal details'
              : ' To keep connected with us'}
          </p>
          <p>
            {order
              ? 'and start your journey with us'
              : ' please login with your personal info'}
          </p>
        </div>
        <div onClick={handleClick}>SIGN {order ? 'UP' : 'IN'}</div>
      </div>
    </div>
  );
};

export default SignIn;
