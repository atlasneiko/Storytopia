export const createFollowing = (following) => (
  $.ajax({
    method: "post",
    url: `/api/followings/`,
    data: { following }
  })
)

export const deleteFollowing = (followingId) => (
  $.ajax({
    method: "delete",
    url: `/api/followings/${followingId}`
  })
)