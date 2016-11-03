import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory,hashHistory } from 'react-router'
import routes from './js/routes/routes'
import { Provider } from 'react-redux';
import configureStore from './js/store/configureStore.js';
import './assets/css/react-bootstrap-table-all.min.css';

const store = configureStore();
 
render(
  <Provider store={store}>
    <Router history={ browserHistory } routes={ routes }/>
  </Provider>
  , document.getElementById('app'));