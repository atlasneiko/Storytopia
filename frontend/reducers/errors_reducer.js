import { combineReducers } from 'redux'
import sessionErrorsReducer from './session_errors_reducer'
import userErrorsReducer from './user_errors_reducer'
import storyErrorsReducer from './story_errors_reducer'
import clapErrorsReducer from './clap_errors_reducer'
import commentErrorsReducer from './comment_errors_reducer'
import followingErrorsReducer from './following_errors_reducer'

export default combineReducers({
  session: sessionErrorsReducer,
  user: userErrorsReducer,
  story: storyErrorsReducer,
  clap: clapErrorsReducer,
  comment: commentErrorsReducer,
  following: followingErrorsReducer
});