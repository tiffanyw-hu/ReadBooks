import React from 'react';
import SignUpFormContainer from './sessions/signup_form_container';
import SignInFormContainer from './sessions/signin_form_container';
import BooksIndexContainer from './books/books_index_container';

const App = () => (
  <div>
    <p>Render</p>
    <SignUpFormContainer />
    <SignInFormContainer />
    <BooksIndexContainer />
  </div>
);

export default App;
