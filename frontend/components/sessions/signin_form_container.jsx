import {connect} from 'react-redux';
import React from 'react';
import {signin} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  formType: "Sign In",
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signin(user))
});

const SignInFormContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SessionForm);

export default SignInFormContainer;
