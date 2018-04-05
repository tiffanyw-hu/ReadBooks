import React from 'react';
import {Provider} from 'react-redux';
import SignUpFormContainer from './sessions/signup_form_container';
import SignInFormContainer from './sessions/signin_form_container';
import BooksIndexContainer from './books/books_index_container';

const Root = ({store}) => (
  <Provider store={store}>
    <div>
    <p>Render</p>
    <SignUpFormContainer />
    <SignInFormContainer />
    <BooksIndexContainer />
  </div>
  </Provider>
);

export default Root;
