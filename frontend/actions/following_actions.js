import * as APIUtils from '../util/following_api_utils'

export const RECEIVE_FOLLOWING = 'RECEIVE_FOLLOWING';
export const RECEIVE_FOLLOWING_ERRORS = 'RECEIVE_FOLLOWING_ERRORS';
export const ERASE_FOLLOWING_ERRORS = 'ERASE_FOLLOWING_ERRORS';

const receiveFollowing = following => ({
  type: RECEIVE_FOLLOWING,
  following
})

const receiveErrors = errors => ({
  type: RECEIVE_FOLLOWING_ERRORS,
  errors
})

export const eraseFollowingErrors = () => ({
  type: ERASE_FOLLOWING_ERRORS
})

