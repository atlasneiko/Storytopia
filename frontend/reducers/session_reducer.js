import { TOGGLE_COMMENT_EDIT, TOGGLE_COMMENT_PAGE, RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_DEMO } from "../actions/session_actions"
const _nullUser = {
  currentUser: { id: null },
  commentDisplay: false
}

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...state, currentUser: { id: action.currentUser.id } };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_DEMO:
      return { ...state, currentUser: { id: "demo" } }
    case TOGGLE_COMMENT_PAGE:
      return { ...state, commentPageDisplay: !state.commentPageDisplay }
    case TOGGLE_COMMENT_EDIT:
      return { ...state, commentEditDisplay: !state.commentEditDisplay }

    default:
      return state;
  }
}

export default sessionReducer;