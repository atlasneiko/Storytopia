import * as StoryAPI from '../util/story_api_util'

export const RECEIVE_ALL_STORIES = 'RECEIVE_ALL_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const RECEIVE_STORY_ERRORS = 'RECEIVE_STORY_ERRORS';
export const DELETE_STORY = "DELETE_STORY"
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"
export const ERASE_STORY_ERRORS = "ERASE_STORY_ERRORS"

const receiveAllStories = stories => ({
  type: RECEIVE_ALL_STORIES,
  stories
})


const receiveStory = story => ({
  type: RECEIVE_STORY,
  story
})

const deleteStory = storyId => ({
  type: DELETE_STORY,
  storyId
})

// error handling ===============================================

const receiveErrors = errors => ({
  type: RECEIVE_STORY_ERRORS,
  errors
})

export const eraseStoryErrors = () => ({
  type: ERASE_STORY_ERRORS
})

//================================================================

export const fetchAllStories = () => dispatch => (
  StoryAPI.fetchAllStories()
    .then(
      stories => dispatch(receiveAllStories(stories)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const fetchStory = storyId => dispatch => (
  StoryAPI.fetchStory(storyId)
    .then(
      story => dispatch(receiveStory(story)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const postStory = story => dispatch => (
  StoryAPI.postStory(story)
    .then(
      story => dispatch(receiveStory(story)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const editStory = story => dispatch => (
  StoryAPI.editStory(story)
    .then(
      story => dispatch(receiveStory(story)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)
export const removeStory = storyId => dispatch => (
  StoryAPI.deleteStory
    .then(
      () => dispatch(deleteStory(storyId)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)