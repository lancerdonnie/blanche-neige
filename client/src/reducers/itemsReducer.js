const initialState = {
  current: null,
  featured: [
    {
      id: 1,
      price: 100,
      name: 'Black Stripes',
      link: 'http://pngimg.com/uploads/dress/dress_PNG194.png',
      category: 'clothes',
      type: 'WOMEN',
      size: [5, 6, 7, 8, 9],
      description: ''
    },
    {
      id: 2,
      price: 200,
      name: 'Black Hood',
      link: 'http://pngimg.com/uploads/dress/dress_PNG149.png',
      category: 'cloth',
      type: 'WOMEN',
      size: [5, 6, 7, 8, 9]
    },
    {
      id: 3,
      price: 100,
      name: 'Black Stripes',
      link: 'https://via.placeholder.com/150X250',
      category: 'cloth',
      type: 'WOMEN',
      size: [5, 6, 7, 8, 9]
    },
    {
      id: 4,
      price: 100,
      name: 'Black Stripes',
      link: 'https://via.placeholder.com/150X250',
      category: 'cloth',
      type: 'WOMEN',
      size: [5, 6, 7, 8, 9]
    }
  ]
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET ITEM':
      return {
        ...state,
        current: state.featured.find(item => {
          return item.id === action.payload;
        })
      };
    default:
      return state;
  }
};
export default itemsReducer;
