import * as UserAPI from '../util/user_api_util'

export const UPDATE_USER = 'UPDATE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const ERASE_USER_ERRORS = 'ERASE_USER_ERRORS';
// export const RECEIVE_USER = 'RECEIVE_USER';
const updateUser = user => ({
  type: UPDATE_USER,
  user
})

const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const eraseUserErrors = () =>({
  type: ERASE_USER_ERRORS
})


export const update = user => dispatch => (
  UserAPI.updateUser(user).then(user => (
    dispatch(updateUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const getAllUsers = () => dispatch => (
  UserAPI.fetchAllUsers()
    .then(
      users => dispatch(receiveAllUsers(users)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const getUser = (userId) => dispatch => (
  UserAPI.fetchUser(userId)
    .then(
      user => dispatch(receiveUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)