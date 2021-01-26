json.extract! user, :id, :username, :email, :about
json.stories user.stories.pluck(:id)
json.claps user.claps.pluck(:id)
json.followers user.followers.pluck(:id)
json.followees user.followees.pluck(:id)