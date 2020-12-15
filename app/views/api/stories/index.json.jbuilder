@stories.each do |story|
  json.set! story.id do 
    json.extract! story,:id, :title, :img_id, :subtitle, :user_id, :updated_at, :body
  end
end