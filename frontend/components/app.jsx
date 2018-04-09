import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import SignUpFormContainer from './sessions/signup_form_container';
import SignInFormContainer from './sessions/signin_form_container';
import BooksIndexContainer from './books/books_index_container';
import BookShowContainer from './books/book_show_container';
import NavBarContainer from './navbar/navbar_container';
import ShelvesIndexContainer from './shelves/shelves_index_container';
import ShelfSideBarContainer from './shelfsidebar/shelf_sidebar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import ShelvesShowContainer from './shelves/shelves_show_container';
import Splash from './splash';

const App = (props) => (
    <div>
    <NavBarContainer />
    <div className="page-container">
    <ProtectedRoute path="/shelves" component={ShelfSideBarContainer} />
    <ProtectedRoute path="/shelves/books" component={BooksIndexContainer} />
    <ProtectedRoute path="/shelves/:shelf_id" component={ShelvesShowContainer} />
    </div>
    <Switch>
      <Route path="/books/:book_id" component={BookShowContainer} />
      <Route path="/books" component={BooksIndexContainer} />
      <AuthRoute exact path="/login" component={SignInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" render={() => (
          props.currentUser ? (
            <Redirect to="/shelves" />
          ) : (
            <Splash />
          )
        )} />
    </Switch>
  </div>
);

export default App;
