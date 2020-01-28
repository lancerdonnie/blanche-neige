import Items from './itemData';
const initialState = {
  current: null,
  cart: [],
  featured: [],
  cat: [],
  random: [...Items].sort(() => 0.5 - Math.random()).slice(0, 6)
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        featured: action.payload
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
      const inCar = state.featured.find(item => {
        return item.id === action.payload;
      });
      const i = { ...inCar };
      i.quantity = 1;
      //is item in cart?
      const c = state.cart.find(item => {
        return item.id === action.payload;
      });
      if (c) {
        const d = state.cart.findIndex(x => {
          return x.id === action.payload;
        });
        const h = [...state.cart];

        h[d].quantity++;
        return {
          ...state,
          cart: h
        };
      } else {
        console.log('yes');
        const b = [...state.cart, i];
        return {
          ...state,
          cart: b
        };
      }

    case 'INCREASE_QUANTITY':
      const a = state.cart.findIndex(x => {
        return x.id === action.payload;
      });
      const g = [...state.cart];
      g[a].quantity++;
      return {
        ...state,
        cart: g
      };
    case 'REDUCE_QUANTITY':
      const h = state.cart.findIndex(x => {
        return x.id === action.payload;
      });
      const j = [...state.cart];
      if (j[h].quantity < 2) {
        const k = j.filter((el, i) => {
          return i !== h;
        });
        return {
          ...state,
          cart: k
        };
      } else {
        j[h].quantity--;
        return {
          ...state,
          cart: j
        };
      }

    case 'CAT':
      return {
        ...state,
        cat: state.featured.filter(x => {
          return x.category === action.payload;
        })
      };
    default:
      return state;
  }
};
export default itemsReducer;
