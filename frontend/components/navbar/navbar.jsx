import React from 'react';
import { Link } from 'react-router-dom';

// const sessionLinks = () => (
//   <nav className="login-signup">
//     <Link to="/login">Login</Link>
//     <Link to="/signup">Sign up!</Link>
//   </nav>
// );

// const personalGreeting = (currentUser, signout) => (
// 	<hgroup className="nav-group">
//     <h2 className="nav-name">Hi, {currentUser.username}!</h2>
//     <button className="nav-button" onClick={signout}>Log Out</button>
// 	</hgroup>
// );

// const navBar = ({ currentUser, signout }) => (
//   currentUser ? personalGreeting(currentUser, signout) : sessionLinks()
// );

const navBar = ({ currentUser, signout }) => {

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
