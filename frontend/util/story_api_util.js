//index
export const fetchAllStories = () => (
  $.ajax({
    url: `/api/stories`,
  })
)
//show
export const fetchStory = (storyId) => (
  $.ajax({
    url: `/api/stories/${storyId}`
  })
)
//create
export const postStory = story => (
  $.ajax({
    method: 'post',
    url: `/api/stories`,
    data: { story }
  })
)
//update
export const editStory = story => (
  $.ajax({
    method: "patch",
    url: `/api/stories/${story.id}`,
    data: { story }
  })
)

//destroy
export const deleteStory = storyId => (
  $.ajax({
    method: 'delete',
    url: `/api/stories/${storyId}`,
  })
)