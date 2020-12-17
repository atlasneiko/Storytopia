import { RECEIVE_COMMENT_ERRORS, ERASE_COMMENT_ERRORS } from '../actions/clap_actions'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors
    case ERASE_COMMENT_ERRORS:
      return []
    default:
      return state
  }
}