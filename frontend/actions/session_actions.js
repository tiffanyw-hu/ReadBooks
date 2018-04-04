import * as SessionAPIUtil from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  method: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveErrors = errors => ({
  method: RECEIVE_SESSION_ERRORS,
  errors
})

export const signin = user => dispatch => (
  SessionAPIUtil.signin(user).then(user => dispatch(receiveCurrentUser(user))),
  err => (dispatch(receiveErrors(err.responseJSON)))
)

export const signup = user => dispatch => (
  SessionAPIUtil.signup().then(user => dispatch(receiveCurrentUser(null))),
  err => (dispatch(receiveErrors(err.responseJSON)))
)

export const signout = () => dispatch => (
  SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)))
)
