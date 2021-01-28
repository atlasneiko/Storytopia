json.extract! @comment, :id, :user_id, :story_id, :body, :updated_at
json.claps @comment.claps.pluck(:id)
