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
import About from './pages/About/About';
import { getItems } from './actions/itemActions';
import { logStatus } from './actions/logActions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favourites from './pages/Favourites/Favourites';
import Contact from './pages/Contact/Contact';

function App() {
  useEffect(() => {
    store.dispatch(getItems());
    store.dispatch(logStatus());
  }, []);
  useEffect(() => {
    console.log('user', store.getState().log.user);
  });

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
            <Route exact path='/about' component={About} />
            <Route exact path='/favourites' component={Favourites} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <ToastContainer autoClose={2000} />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
