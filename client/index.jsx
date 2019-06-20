import React from 'react';
import { render } from "react-dom";
import App from './containers/App'
import './css/reset.css';
import './css/application.css';
import { Provider } from 'react-redux';
import store from './store';

// import styles from './scss/application.scss';

render (
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

