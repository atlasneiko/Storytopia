import { ERASE_FOLLOWING_ERRORS, RECEIVE_FOLLOWING_ERRORS } from '../actions/following_actions'
export default (state = [], action) => {
  switch (action.type) {
    case ERASE_FOLLOWING_ERRORS:
      return [];
    case RECEIVE_FOLLOWING_ERRORS:
      return action.errors
    default:
      return state
  }
}