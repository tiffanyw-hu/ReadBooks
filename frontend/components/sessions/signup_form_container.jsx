import {connect} from 'react-redux';
import React from 'react';
import {signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  formType: "Sign Up",
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user))
});

const SignUpFormContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SessionForm);

export default SignUpFormContainer;
