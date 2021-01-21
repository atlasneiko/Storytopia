json.extract! story, :id, :title, :subtitle, :user_id, :body, :updated_at, :img_id
json.claps story.claps.pluck(:id)
json.comments story.comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :body, :user_id, :story_id, :updated_at, :id
    json.claps comment.claps.pluck(:id)
  end
end