const initialState = { auth: null, user: null };
const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        auth: true,
        user: action.payload
      };
    case 'REMOVE_AUTH':
      return {
        ...state,
        auth: false,
        user: null
      };
    case 'STORE_UPDATE':
      console.log(action.payload, 'payload');
      const a = { ...state.user };
      a.favourites = action.payload;
      return {
        ...state,
        user: a
      };
    default:
      return state;
  }
};

export default logReducer;
