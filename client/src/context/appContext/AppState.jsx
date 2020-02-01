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
    '--nav-color': 'white',
    '--bg-color2': 'white',
    '--bg-color3': '#eee',
    '--color': 'black',
    '--card': '#FFF',
    '--accent': '#5662ca',
    '--linear': 'linear-gradient(to right, #da4453, #89216b)'
  };
  const darkTheme = {
    '--bg-color': 'white',
    '--nav-color': 'black',
    '--bg-color2': '#212121',
    '--bg-color3': '#333333ad',
    '--color': 'white',
    '--card': '#011b33',
    '--accent': '#b05603',
    '--linear': 'linear-gradient(to right, #091c29, #3A6073)'
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
