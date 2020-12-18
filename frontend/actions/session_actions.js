import * as API from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const RECEIVE_DEMO = 'RECEIVE_DEMO'
export const ERASE_SESSION_ERRORS = 'ERASE_SESSION_ERRORS';
export const TOGGLE_COMMENT_PAGE = 'TOGGLE_COMMENT_PAGE';
export const TOGGLE_COMMENT_EDIT = 'TOGGLE_COMMENT_EDIT';

export const receiveDemo = () => ({
  type: RECEIVE_DEMO
})

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})
// toggle comment components
export const toggleCommentPage = () => ({
  type: TOGGLE_COMMENT_PAGE
})
export const toggleCommentEidt = () => ({
  type: TOGGLE_COMMENT_EDIT
})


export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const eraseSessionErrors = () => ({
  type: ERASE_SESSION_ERRORS
})

export const signup = user => dispatch => (
  API.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const login = user => dispatch => (
  API.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const logout = () => dispatch => (
  API.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
)