import React from 'react';
import SignUpFormContainer from './sessions/signup_form_container';
import SignInFormContainer from './sessions/signin_form_container';
import BooksIndexContainer from './books/books_index_container';
import BookShowContainer from './books/book_show_container';
import {Route, Switch} from 'react-router-dom';

const App = () => (
  <div>
    <p>Render</p>
    <Switch>
      <Route exact path="/books/:book_id" component={BookShowContainer} />
      <Route exact path="/books" component={BooksIndexContainer} />
      <Route exact path="/" component={SignUpFormContainer} />
    </Switch>
    <BooksIndexContainer />
  </div>
);

export default App;
