class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.story_id = params[:story_id]
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def update
    @comment = current_user.comments.find_by(id: params[:id])
    @comment.story_id = params[:story_id]
    if @comment
      if @comment.update(comment_params)
        render "api/comments/show"
      else
        render json: @comment.errors.full_messages, status: 422
      end
    else
      render json["You can not edit this comment"]
    end
  end
  
  def destroy
    @comment = current_user.comments.find_by(id: params[:id])
    if @comment.destroy
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end
  def show
    @comment = Comment.find_by(id: params[:id])
    render "api/comments/show"
  end
  private
  def comment_params
    params.require(:comment).permit(:user_id, :body, :story_id, :id)
  end
end
