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
        <a href="https://github.com/tiffanyw-hu"><img src="data:image/png;base64,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"></img></a>
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
