import { RECEIVE_CLAP_ERRORS, ERASE_CLAP_ERRORS } from '../actions/clap_actions'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CLAP_ERRORS:
      return action.errors
    case ERASE_CLAP_ERRORS:
      return []
    default:
      return state
  }
}