import {
  RECEIVE_STORY_ERRORS,
  ERASE_STORY_ERRORS
} from '../actions/story_actions'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_STORY_ERRORS:
      return action.errors
    case ERASE_STORY_ERRORS:
      return []
    default:
      return state;
  }
}