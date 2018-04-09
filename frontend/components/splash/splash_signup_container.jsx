import {connect} from 'react-redux';
import React from 'react';
import {signup} from '../../actions/session_actions';
import SplashSignUpForm from './splash_signin_form';

const mapStateToProps = (state, ownProps) => ({
  formType: "signup",
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user))
});

const SplashSignUpContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SplashSignUpForm);

export default SplashSignUpContainer;
