import {withRouter} from 'react-router-dom';
import React from 'react';
import SignUpFormContainer from './sessions/signup_form_container';
import SignInFormContainer from './sessions/signin_form_container';
import BooksIndexContainer from './books/books_index_container';

class Splash extends React.Component {

  render() {
    return (
      <div className="splash">
        <SignInFormContainer />
        <SignUpFormContainer />
        <BooksIndexContainer />
      </div>
    )
  }
}

export default withRouter(Splash);
