import React from 'react';
import ReactDOM from 'react-dom';
// //Components
import Root from './components/root';
import configureStore from './store/store';
import {signup} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.signup = signup;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
