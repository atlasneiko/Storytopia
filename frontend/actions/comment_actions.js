import * as CommentAPI from "../util/comment_api_util"





export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS"
export const ERASE_COMMENT_ERRORS = "ERASE_COMMENT_ERRORS"

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  commentId
})

const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})
export const eraseCommentErrors = () => ({
  type: ERASE_COMMENT_ERRORS
})

export const createComment = comment => dispatch => (
  CommentAPI.createComment(comment)
    .then(
      comment => dispatch(receiveComment(comment)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
)

export const updateComment = (comment) => dispatch => (
  CommentAPI.updateComment(comment)
    .then(
      (comment) => dispatch(receiveComment(comment)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    )
)

export const removeComment = (comment) => dispatch => (
  PostApiUtil.deleteComment
    .then(
      () => dispatch(deleteComment(comment.id)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    )
)