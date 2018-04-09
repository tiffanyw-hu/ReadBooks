import {withRouter} from 'react-router-dom';
import React from 'react';
import SignUpFormContainer from './sessions/signup_form_container';
import SignInFormContainer from './sessions/signin_form_container';
import BooksIndexContainer from './books/books_index_container';

class Splash extends React.Component {

  render() {
    // <img src="http://res.cloudinary.com/dqj3kgpoj/image/upload/v1523297820/background.png" />
    return (
      <div className="splash">
        <div className="splash-signin">
          <SignInFormContainer />
        </div>
        <SignUpFormContainer />
        <BooksIndexContainer />
      </div>
    )
  }
}

export default withRouter(Splash);
