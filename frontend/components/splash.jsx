import {withRouter} from 'react-router-dom';
import React from 'react';
import SplashSignUpContainer from './splash/splash_signup_container';
import SplashSignInContainer from './splash/splash_signin_container';
import BooksIndexContainer from './books/books_index_container';

class Splash extends React.Component {

  render() {

    return (
      <div className="splash">
        <div className="splash-header">
          <div className="splash-top">
            <SplashSignInContainer />
          </div>
          <div className="splash-bottom">
            <img src="http://res.cloudinary.com/dqj3kgpoj/image/upload/c_scale,w_337/v1523307981/headline-e2cd420e71737ff2815d09af5b65c4e4.png" />
            <SplashSignUpContainer />
          </div>
        </div>
        <div className="splash-body">
          <BooksIndexContainer />
        </div>
      </div>
    )
  }
}

export default withRouter(Splash);
