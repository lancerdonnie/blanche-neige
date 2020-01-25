import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';
import NavBar from './layout/NavBar/NavBar';
import Footer from './layout/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Item from './pages/Item/Item';

function App() {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/:cat/:id' component={Item} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
