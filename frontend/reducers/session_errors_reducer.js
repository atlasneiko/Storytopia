import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, ERASE_SESSION_ERRORS } from "../actions/session_actions"


export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors
    case ERASE_SESSION_ERRORS:
      return []
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}