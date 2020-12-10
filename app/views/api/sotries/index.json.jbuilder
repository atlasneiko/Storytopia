@stories.each do |story|
  json.set! story.id do 
    json.extract! story, :title, :subtitle, :user_id
  end
end