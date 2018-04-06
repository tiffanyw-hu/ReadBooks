import {connect} from 'react-redux';
import React from 'react';
import {signout} from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = ({session}) => {
  return {
    currentUser: session.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)

export default NavBarContainer;
