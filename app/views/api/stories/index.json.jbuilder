@stories.each do |story|
  json.set! story.id do 
    json.extract! story,:id, :title, :subtitle, :user_id, :updated_at
  end
end