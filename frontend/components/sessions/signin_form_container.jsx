import {connect} from 'react-redux';
import React from 'react';
import {signin} from '../../actions/session_actions';
import SessionForm from './session_form';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  formType: "Sign In",
  currentUser: state.session.currentUser,
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signin(user)),
  clearErrors: () => dispatch(clearErrors())
});

const SignInFormContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SessionForm);

export default SignInFormContainer;
