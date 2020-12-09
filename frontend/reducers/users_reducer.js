import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions"
import { UPDATE_USER, RECEIVE_ALL_USERS } from '../actions/user_actions'
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...state, [action.currentUser.id]: action.currentUser }
    case UPDATE_USER:
      return { ...state, [action.user.id]: action.user }
    case RECEIVE_ALL_USERS:
      return action.users
    default:
      return state;
  }
}

export default usersReducer;