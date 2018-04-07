import React from 'react';
import { Link } from 'react-router-dom';

const navBar = ({ currentUser, signout, splash }) => {

  if (currentUser) {
    return (
      <div className="navbar">
        <p className="nav-logo">Logo</p>
        <Link to="/shelves">Home</Link>
        <Link to="/shelves">MyBooks</Link>
        <Link to="/books">Browse</Link>
        <button className="nav-button" onClick={signout}>Log Out</button>
      </div>
    )
  } else {
      if (splash) {
        return <div></div>
      }
      return (
        <div className="navbar">
          <p className="nav-logo">Logo</p>
          <Link to="/signup">Home</Link>
          <Link to="/signup">MyBooks</Link>
          <Link to="/books">Browse</Link>
          <nav className="login-signup">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up!</Link>
          </nav>
        </div>
      )
    };
}

export default navBar;
