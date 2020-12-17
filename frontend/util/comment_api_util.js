export const createComment = (comment) => (
  $.ajax({
    method: "post",
    url: `/api/stories/${comment.storyId}/comments`,
    data: { comment }
  })
)

export const updateComment = (comment) => (
  $.ajax({
    method: "patch",
    url: `/api/stories/${comment.storyId}/comments/${comment.id}`,
    data: { comment }
  })
)

export const deleteComment = (comment) => (
  $.ajax({
    method: 'delete',
    url: `/api/stories/${comment.storyId}/comments/${comment.id}`
  })
)

