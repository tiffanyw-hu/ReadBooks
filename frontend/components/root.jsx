import React from 'react';
import {Provider} from 'react-redux';
import SignUpFormContainer from './sessions/signup_form_container';


const Root = ({store}) => (
  <Provider store={store}>
    <div>  
    <p>Render</p>
    <SignUpFormContainer />
  </div>
  </Provider>
);

export default Root;
