json.extract! @comment, :user_id, :story_id, :body, :id, 
json.claps @comment.claps.pluck(:id)
