import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';
import NavBar from './layout/NavBar/NavBar';
import Footer from './layout/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <div className='container'>
          <Switch>
            <Router exact path='/' component={HomePage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
