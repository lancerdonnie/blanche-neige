import React from 'react';
import styles from './Stripe.module.scss';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const successPayment = data => {
  alert('Payment Successful');
};
const errorPayment = data => {
  alert('Payment Error');
};
const onToken = (amount, description) => token =>
  axios
    .post('/', {
      description,
      source: token.id,
      currency: 'NGN',
      amount: amount
    })
    .then(successPayment)
    .catch(errorPayment);

const CardDemo = ({ name, description, amount }) => {
  return (
    <StripeCheckout
      // name={name}
      // description={description}
      // amount={amount}
      token={onToken(amount, description)}
      // currency={'NGN'}
      stripeKey={'pk_test_LksuSixZm38cfg6DRzDLm8uH009kj8rGqW'}
    />
  );
};
export default CardDemo;
