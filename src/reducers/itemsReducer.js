import {
  addItemUtil,
  reduceQuantityUtil,
  increaseQuantityUtil,
  removeItem
} from './utils';

const initialState = {
  current: null,
  cart: localStorage.getItem('cart')
    ? [...JSON.parse(localStorage.getItem('cart'))]
    : [],
  featured: [],
  random: []
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        featured: action.payload,
        random: [...action.payload].sort(() => 0.5 - Math.random()).slice(0, 6)
      };
    case 'SET ITEM':
      return {
        ...state,
        current: state.featured.find(item => {
          return item.id === action.payload;
        })
      };
    case 'ADD_CART':
      console.log(true);
      //find and copy item
      return {
        ...state,
        cart: addItemUtil(state, action.payload)
      };

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: increaseQuantityUtil(state.cart, action.payload)
      };
    case 'REDUCE_QUANTITY':
      return {
        ...state,
        cart: reduceQuantityUtil(state.cart, action.payload)
      };
    case 'REMOVE_ITEM':
      removeItem(action.payload);
      return {
        ...state,
        cart: state.cart.filter(x => {
          return x.id !== action.payload;
        })
      };

    default:
      return state;
  }
};
export default itemsReducer;
