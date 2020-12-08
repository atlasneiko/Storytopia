import * as UserAPI from '../util/user_api_util'

export const UPDATE_USER = 'UPDATE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const updateUser = user => ({
  type: UPDATE_USER,
  user
})

const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})


export const update = user => dispatch => (
  UserAPI.updateUser(user).then(user => (
    dispatch(updateUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)