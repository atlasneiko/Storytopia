class Api::StoriesController < ApplicationController
  before_action :required_logged_in, only: [:create, :update, :destroy]

  def index 
    @stories = Stories.all
    render "api/stories/index"
  end

  def show
    @story = Stories.find_by(id: params[:id])
    if @story
      render 'api/stories/show'
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def create 
    @story = Story.new(story_params)
    if @story.save
      render 'api/stories/show'
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def update 
    @story = story.find_by(id: params[:id])
    if @story && @story.update(story_params)
      render 'api/users/show'
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  private
  def story_params
    params.require(:story).permit(:user_id, :title, :subtitle, :body)
  end
end
