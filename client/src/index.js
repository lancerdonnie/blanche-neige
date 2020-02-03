import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

let basename = '/client';
if (process.env.NODE_ENV !== 'production') {
  basename = null;
}
ReactDOM.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
