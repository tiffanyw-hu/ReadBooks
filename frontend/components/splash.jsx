import {withRouter} from 'react-router-dom';
import React from 'react';
import SplashSignUpContainer from './splash/splash_signup_container';
import SplashSignInContainer from './splash/splash_signin_container';
import BooksIndexContainer from './books/books_index_container';

class Splash extends React.Component {

  render() {
    // <img src="http://res.cloudinary.com/dqj3kgpoj/image/upload/v1523297820/background.png"
    return (
      <div className="splash">
        <div className="splash-signin">
          <SplashSignInContainer />
        </div>
        <SplashSignUpContainer />
        <BooksIndexContainer />
      </div>
    )
  }
}

export default withRouter(Splash);
