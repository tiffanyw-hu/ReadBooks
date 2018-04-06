import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUpFormContainer from './sessions/signup_form_container';
import SignInFormContainer from './sessions/signin_form_container';
import BooksIndexContainer from './books/books_index_container';
import BookShowContainer from './books/book_show_container';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
  <div>
    <p>Render</p>
    <NavBarContainer />
    <Switch>
      <Route exact path="/books/:book_id" component={BookShowContainer} />
      <Route exact path="/books" component={BooksIndexContainer} />
      <Route path="/" component={SignUpFormContainer} />
    </Switch>
    <BooksIndexContainer />
    <SignInFormContainer />
  </div>
);

export default App;
