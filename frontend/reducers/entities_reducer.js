import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import storiesReducer from './stories_reducer'
import clapsReducer from './claps_reducer'
import commentsReducer from './comments_reducer'
import followingReducer from './followings_reducer'

export default combineReducers({
  users: usersReducer,
  stories: storiesReducer,
  claps: clapsReducer,
  comments: commentsReducer,
  followings: followingReducer
})