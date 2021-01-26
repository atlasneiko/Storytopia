import { RECEIVE_FOLLOWING, REMOVE_FOLLOWING } from '../actions/following_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FOLLOWING:
      return { ...state, [action.following.id]: action.following }
    case REMOVE_FOLLOWING:
      return { ...state, [action.followingId]: undefined }
    default:
      return state
  }
}