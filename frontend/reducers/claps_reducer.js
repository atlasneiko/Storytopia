import {
  RECEIVE_CLAP,
  RECEIVE_ALL_CLAPS,
  UPDATE_CLAP
} from "../actions/clap_actions"

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CLAPS:
      return action.claps
    case RECEIVE_CLAP:
      return { ...state, [action.clap.id]: action.clap }
    default:
      return state
  }
}