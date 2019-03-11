import {connect} from 'react-redux';
import React from 'react';
import {signout} from '../../actions/session_actions';
import NavBar from './navbar';
import {clearErrors} from '../../actions/session_actions';
// import {fetchShelves, fetchShelf} from '../../actions/shelf_actions';

const mapStateToProps = ({session}, ownProps) => {
  let urlArray = window.location.href.split("/")
  return {
    currentUser: session.currentUser,
    splash: urlArray
  }
}

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  clearErrors: () => dispatch(clearErrors()),
});

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)

export default NavBarContainer;
