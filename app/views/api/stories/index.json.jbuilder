@stories.each do |story|
  json.set! story.id do 
    json.extract! story,:id, :title, :img_id, :subtitle, :user_id, :updated_at, :body
    json.claps story.claps.pluck(:id)
    json.comments story.comments.pluck(:id)
  end
end