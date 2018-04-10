import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, signout, splash }) => {

  if (currentUser) {
    return (
      <div className="navbar">
        <p className="nav-logo">ReadBooks</p>
        <Link className="home" to="/shelves">Home</Link>
        <Link className="mybooks" to="/shelves">MyBooks</Link>
        <Link className="browse" to="/books">Browse</Link>
        <button className="nav-button" onClick={signout}>Log Out</button>
      </div>
    )
  } else {
      if (splash.length === 5 && !splash.includes("books") && !splash.includes("shelves")
    && !splash.includes("signup") && !splash.includes("login")) {
        return <div></div>
      }
      return (
        <div className="navbar">
          <p className="nav-logo">ReadBooks</p>
          <Link to="/">Home</Link>
          <Link to="/signup">MyBooks</Link>
          <Link to="/books">Browse</Link>
          <nav className="login-signup">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </nav>
        </div>
      )
    };
}

export default navBar;
