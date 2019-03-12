import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, signout, splash, clearErrors }) => {

  if (currentUser) {
    return (
      <div className="navbar">
        <Link onClick={clearErrors} to="/" className="nav-logo">ReadBooks</Link>
        <Link className="mybooks" to="/shelves/mybooks">MyBooks</Link>
        <Link className="browse" to="/shelves/books">Browse</Link>
        <nav className="login-signup">
          <Link className="last" to="/" onClick={signout}>Log Out</Link>
        </nav>
      </div>
    )
  } else {
    // console.log(splash)
      if (splash.length === 5 && !splash.includes("books") && !splash.includes("shelves")
    && !splash.includes("signup") && !splash.includes("login")) {
        return <div></div>
      }
      return (
        <div className="navbar">
          <Link onClick={clearErrors} to="/" className="nav-logo">ReadBooks</Link>
          <Link onClick={clearErrors} to="/signup">MyBooks</Link>
          <Link onClick={clearErrors} to="/books">Browse</Link>
          <nav className="login-signup">
            <Link onClick={clearErrors} to="/login">Login</Link>
            <Link onClick={clearErrors} to="/signup">Sign&nbsp;up</Link>
          </nav>
        </div>
      )
    };
}

export default navBar;
