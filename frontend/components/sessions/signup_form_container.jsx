import {connect} from 'react-redux';
import React from 'react';
import {signup} from '../../actions/session_actions';
import SessionForm from './session_form';
import {clearErrors} from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => ({
  formType: "Sign Up",
  currentUser: state.session.currentUser,
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

const SignUpFormContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SessionForm);

export default SignUpFormContainer;
