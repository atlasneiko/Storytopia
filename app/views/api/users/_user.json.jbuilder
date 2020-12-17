json.extract! user, :id, :username, :email, :about
json.stories user.stories.pluck(:id)
json.claps user.claps.pluck(:id)