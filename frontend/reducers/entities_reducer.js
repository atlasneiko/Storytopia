import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import storiesReducer from './stories_reducer'
import clapsReducer from './claps_reducer'

export default combineReducers({
  users: usersReducer,
  stories: storiesReducer,
  claps: clapsReducer
})