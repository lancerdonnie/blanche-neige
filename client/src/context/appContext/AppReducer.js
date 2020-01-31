export default (state, action) => {
  switch (action.type) {
    case 'THEME':
      localStorage.setItem('theme', !state.theme);
      return { ...state, theme: !state.theme };

    default:
      return state;
  }
};
