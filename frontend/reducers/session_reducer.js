import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_DEMO } from "../actions/session_actions"
const _nullUser = {
  currentUser: { id: null }
}

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: { id: action.currentUser.id } };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_DEMO:
      return { currentUser: { id: "demo" } }
    default:
      return state;
  }
}

export default sessionReducer;