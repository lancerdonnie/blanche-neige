const initialState = {
  featured: [
    {
      price: 100,
      name: 'Black Stripes',
      link: 'https://via.placeholder.com/150X250'
    },
    {
      price: 100,
      name: 'Black Stripes',
      link: 'https://via.placeholder.com/150X250'
    },
    {
      price: 100,
      name: 'Black Stripes',
      link: 'https://via.placeholder.com/150X250'
    },
    {
      price: 100,
      name: 'Black Stripes',
      link: 'https://via.placeholder.com/150X250'
    }
  ]
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default itemsReducer;
