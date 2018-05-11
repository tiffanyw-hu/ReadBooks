import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, signout, splash, clearErrors }) => {

  if (currentUser) {
    return (
      <div className="navbar">
        <Link onClick={clearErrors} to="/" className="nav-logo">ReadBooks</Link>
        <Link className="home" to="/shelves">Home</Link>
        <Link className="mybooks" to="/shelves">MyBooks</Link>
        <Link className="browse" to="/shelves/books">Browse</Link>
        <a href="https://github.com/tiffanyw-hu">Github</a>
        <Link className="last" to="/" onClick={signout}>Log Out</Link>
      </div>
    )
  } else {
      if (splash.length === 5 && !splash.includes("books") && !splash.includes("shelves")
    && !splash.includes("signup") && !splash.includes("login")) {
        return <div></div>
      }
      return (
        <div className="navbar">
          <Link onClick={clearErrors} to="/" className="nav-logo">ReadBooks</Link>
          <Link onClick={clearErrors} to="/">Home</Link>
          <Link onClick={clearErrors} to="/signup">MyBooks</Link>
          <Link onClick={clearErrors} to="/books">Browse</Link>
          <nav className="login-signup">
            <Link onClick={clearErrors} to="/login">Login</Link>
            <Link onClick={clearErrors} to="/signup">Sign up</Link>
          </nav>
        </div>
      )
    };
}

export default navBar;
