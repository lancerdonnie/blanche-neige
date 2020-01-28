import { db } from '../config/fbConfig';

export const addItem = () => async dispatch => {};

export const getItems = () => async dispatch => {
  let data = await db.collection('items').get();
  data = data.docs.map(doc => {
    return { id: doc.id, ...doc.data() };
  });
  dispatch({ type: 'GET_ITEMS', payload: data });
};

export const addCart = id => {
  return {
    type: 'ADD_CART',
    payload: id
  };
};
export const add = id => {
  return {
    type: 'INCREASE_QUANTITY',
    payload: id
  };
};
export const reduce = id => {
  return {
    type: 'REDUCE_QUANTITY',
    payload: id
  };
};
export const cat = category => {
  return {
    type: 'CAT',
    payload: category
  };
};
