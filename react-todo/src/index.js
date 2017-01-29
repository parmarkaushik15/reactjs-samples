import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import './index.css';

import { Provider } from 'react-redux'

import configureStore from './configureStore'

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
