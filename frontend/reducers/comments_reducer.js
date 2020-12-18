import {
  RECEIVE_COMMENT,
  DELETE_COMMENT
} from '../actions/comment_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENT:
      return { ...state, [action.comment.id]: action.comment }
    case DELETE_COMMENT:
      return { ...state, [action.commentId]: undefined }
    default:
      return state
  }
}