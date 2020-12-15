import {
  RECEIVE_ALL_STORIES,
  RECEIVE_STORY,
  DELETE_STORY
} from '../actions/story_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_STORIES:
      return action.stories
    case RECEIVE_STORY:
      return { ...state, [action.story.id]: action.story }
    case DELETE_STORY:
      return { ...state, [action.storyId]: undefined }
    default:
      return state
  }
}