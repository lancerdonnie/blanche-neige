import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';
import NavBar from './layout/NavBar/NavBar';
import Footer from './layout/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Item from './pages/Item/Item';
import SignIn from './pages/Auth/SignIn';
import Cart from './pages/Cart/Cart';
import Cat from './pages/Cat/Cat';
import { getItems } from './actions/itemActions';
function App() {
  useEffect(() => {
    store.dispatch(getItems());
  }, []);
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/categories/:cat/:id' component={Item} />
            <Route path='/categories' component={Cat} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
