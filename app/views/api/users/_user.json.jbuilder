json.extract! user, :id, :username, :email, :about
json.stories user.stories.pluck(:id)