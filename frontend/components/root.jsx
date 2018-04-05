import React from 'react';
import {Provider} from 'react-redux';
import SignUpFormContainer from './sessions/signup_form_container';
import SignInFormContainer from './sessions/signin_form_container';

const Root = ({store}) => (
  <Provider store={store}>
    <div>
    <p>Render</p>
    <SignUpFormContainer />
    <SignInFormContainer />
  </div>
  </Provider>
);

export default Root;
