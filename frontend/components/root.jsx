import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import App from './app';


const Root = ({store, currentUser}) => (
  <Provider store={store}>
    <HashRouter>
      <App currentUser={currentUser}/>
    </HashRouter>
  </Provider>
);

export default Root;
