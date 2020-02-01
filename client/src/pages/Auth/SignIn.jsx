import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './SignIn.module.scss';
import firebase, { db, auth, gProvider } from '../../config/fbConfig';
import { toast } from 'react-toastify';
const SignIn = ({ user, history }) => {
  useEffect(() => {
    if (user) {
      toast.success('Sign in Successful');
      history.push('/');
    }
  }, [user]);
  const [order, setOrder] = useState(true);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const handleClick = () => {
    setOrder(!order);
  };
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    //validation
    if (order === false) {
      const a = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      try {
        await db
          .collection('users')
          .doc(a.user.uid)
          .set({
            favourites: [],
            name: data.name,
            email: a.user.email,
            created: a.user.metadata.creationTime
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      await auth.signInWithEmailAndPassword(data.email, data.password);
    }
  };
  const handleGoogle = async () => {
    var res = await firebase.auth().signInWithPopup(gProvider);
    if (res.additionalUserInfo.isNewUser) {
      console.log('save');
      try {
        await db
          .collection('users')
          .doc(res.user.uid)
          .set({
            favourites: [],
            name: res.user.displayName,
            email: res.user.email,
            created: res.user.metadata.creationTime
          });
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  };
  return (
    <div className={styles.signin}>
      <div className={order ? styles.div1 : styles.div2}>
        <p>Sign {order ? 'in' : 'up'}</p>
        <span onClick={handleGoogle}>
          Sign {order ? 'in' : 'up'} with google
        </span>
        {order && <p>or use your account</p>}
        <form onSubmit={handleSubmit} type='submit'>
          {!order && (
            <input
              type='text'
              placeholder='Name'
              name='name'
              onChange={handleChange}
            />
          )}
          <input
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
          {!order && (
            <input
              type='text'
              placeholder='Confirm Password'
              name='password2'
              onChange={handleChange}
            />
          )}
          {order && <p>Forgot your password?</p>}
          <input type='submit' value={order ? 'SIGN IN' : 'SIGN UP'} />
        </form>
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

export default connect(state => {
  return { user: state.log.user };
})(SignIn);
