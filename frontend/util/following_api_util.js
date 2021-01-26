export const createFollowing = (following) => (
  $.ajax({
    method: "post",
    url: `/api/followings/`,
    data: { following }
  })
)

export const deleteFollowing = (following) => (
  $.ajax({
    method: "delete",
    url: `/api/followings/`,
    data: { following }
  })
)