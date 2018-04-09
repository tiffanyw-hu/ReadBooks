import {connect} from 'react-redux';
import React from 'react';
import {signin} from '../../actions/session_actions';
import SplashSignInForm from './splash_signin_form';

const mapStateToProps = (state, ownProps) => ({
  formType: "signin",
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signin(user))
});

const SplashSignInContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SplashSignInForm);

export default SplashSignInContainer;
