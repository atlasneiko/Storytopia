export const fetchUser = (userId) => (
  $.ajax({
    url: `/api/users/${userId}`,
  })
)
export const fetchAllUsers = () =>(
  $.ajax({
    url: `/api/users`
  })
)
export const updateUser = (user) => (
  $.ajax({
    method: 'patch',
    url: `/api/users/${user.id}`,
    data: { user }
  })
)