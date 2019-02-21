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
            <div>
              <img src="http://res.cloudinary.com/dqj3kgpoj/image/upload/c_scale,w_337/v1523307981/headline-e2cd420e71737ff2815d09af5b65c4e4.png" />
            </div>
            <SplashSignUpContainer />
          </div>
        </div>
        <div className="splash-body">
          <div className="splash-body-text-container">
            <div className="first-wall">
              <h3>Deciding what to read next?</h3>
              <p>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
            </div>
            <div className="second-wall">
              <h3>What are your friends reading?</h3>
              <p>Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</p>
            </div>
          </div>
          </div>
          <div className="splash-books">
            <BooksIndexContainer />
          </div>
        </div>
    )
  }
}

export default withRouter(Splash);
