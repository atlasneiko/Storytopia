export const createFollowing = (following) => (
  $.ajax({
    method: "post",
    url: `/api/followings/`,
    data: { follosing }
  })
)