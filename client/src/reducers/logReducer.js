const initialState = { auth: null, user: null };
const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      console.log(true, action.payload);
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
    default:
      return state;
  }
};

export default logReducer;
