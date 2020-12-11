class Api::StoriesController < ApplicationController
  before_action :required_logged_in, except: [:index, :show]

  def index 
    @stories = Story.all
    render 'api/stories/show'
  end

  def show
    @story = Story.find_by(id: params[:id])
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
    @story = current_user.stories.find_by(id: params[:id])
    if @story 
      if @story.update(story_params)
        render 'api/stories/show'
      else
        render json: @story.errors.full_messages, status: 422
      end
    else
      render json["You can not edit this story."]
    end
  end

  def destroy
    @story = current_user.stories.find_by(id: params[:id])
    if @story.destroy
      render 'api/stories/show'
    else
      render json["You cannot delete this story."]
    end
  end

  private
  def story_params
    params.require(:story).permit(:title, :subtitle, :user_id, :body)
  end
end
