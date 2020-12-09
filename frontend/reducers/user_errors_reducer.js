import { UPDATE_USER, RECEIVE_USER_ERRORS } from '../actions/user_actions'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors
    case UPDATE_USER:
      return [];
    default:
      return state
  }
}
