import reducer from './AppReducer';
import AppContext from './AppContext';
import React, { useReducer, useEffect } from 'react';

const AppState = props => {
  //false==light

  const initialState = {
    theme: localStorage.theme ? JSON.parse(localStorage.theme) : false
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (localStorage.theme) {
      if (JSON.parse(localStorage.theme) === true) {
        applyTheme(false);
      }
    }
  }, []);
  const lightTheme = {
    '--bg-color': '#5662ca',
    '--bg-color1': 'white',
    '--bg-color3': '#eee',
    '--color': 'black'
  };
  const darkTheme = {
    '--bg-color': '#5662ca',
    '--bg-color1': 'black',
    '--bg-color3': '#eee',
    '--color': 'white'
  };

  const applyTheme = nextTheme => {
    const theme = nextTheme === true ? lightTheme : darkTheme;
    Object.keys(theme).map(key => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  };

  //actions
  const setTheme = () => {
    dispatch({ type: 'THEME' });
    applyTheme(state.theme);
  };

  return (
    <AppContext.Provider value={{ theme: state.theme, setTheme }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
