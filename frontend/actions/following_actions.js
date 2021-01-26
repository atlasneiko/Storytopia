import * as APIUtils from '../util/following_api_util'

export const RECEIVE_FOLLOWING = 'RECEIVE_FOLLOWING';
export const RECEIVE_FOLLOWING_ERRORS = 'RECEIVE_FOLLOWING_ERRORS';
export const ERASE_FOLLOWING_ERRORS = 'ERASE_FOLLOWING_ERRORS';
export const REMOVE_FOLLOWING = 'REMOVE_FOLLOWING';
const receiveFollowing = following => ({
  type: RECEIVE_FOLLOWING,
  following
})

const receiveErrors = errors => ({
  type: RECEIVE_FOLLOWING_ERRORS,
  errors
})
const removeFollowing = followingId => ({
  type: REMOVE_FOLLOWING,
  followingId
})

export const eraseFollowingErrors = () => ({
  type: ERASE_FOLLOWING_ERRORS
})

export const createFollowing = (following) => dispatch => (
  APIUtils.createFollowing(following)
    .then(
      res => dispatch(receiveFollowing(res)),
      err => dispatch => receiveErrors(err)
    )
)
export const deleteFollowing = following => dispatch => (
  APIUtils.deleteFollowing(following)
    .then(
      res => dispatch(removeFollowing(following)),
      err => dispatch(receiveErrors(err)
      )
    )
)