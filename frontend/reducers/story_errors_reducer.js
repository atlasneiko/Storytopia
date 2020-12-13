import {
  RECEIVE_ALL_STORIES,
  RECEIVE_STORY,
  RECEIVE_STORY_ERRORS,
  DELETE_STORY
} from '../actions/story_actions'

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_STORY_ERRORS:
      return action.errors;
    case DELETE_STORY:
      return action.errors;
    case RECEIVE_STORY:
      return [];
    case RECEIVE_ALL_STORIES:
      return [];
    default:
      return state;
  }
}