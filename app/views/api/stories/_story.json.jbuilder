json.extract! story, :id, :title, :subtitle, :user_id, :body, :updated_at, :img_id
json.claps story.claps.pluck(:id)
