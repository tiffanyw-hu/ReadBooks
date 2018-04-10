import * as SessionAPIUtil from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

export const signin = user => dispatch => (
  SessionAPIUtil.signin(user).then(user => dispatch(receiveCurrentUser(user)),
  err => (dispatch(receiveErrors(err.responseJSON)))
))

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
  err => {
    return dispatch(receiveErrors(err.responseJSON))
  }
))

export const signout = () => dispatch => (
  SessionAPIUtil.signout().then(user => dispatch(receiveCurrentUser(null)))
)

export const removeErrors = () => dispatch => (
  dispatch(clearErrors())
)
