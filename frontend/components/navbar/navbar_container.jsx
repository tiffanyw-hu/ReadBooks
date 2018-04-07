import {connect} from 'react-redux';
import React from 'react';
import {signout} from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = ({session}, ownProps) => {
  let urlArray = window.location.href.split("/")
  return {
    currentUser: session.currentUser,
    splash: urlArray.length === 5
  }
}

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)

export default NavBarContainer;
