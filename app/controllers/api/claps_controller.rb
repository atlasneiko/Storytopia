class Api::ClapsController < ApplicationController
  before_action :required_logged_in, except: [:index, :show]

  def create
    @clap = Clap.new(clap_params)
    if @clap.save
      render 'api/claps/show'
    else
      render json: @clap.errors.full_messages, status: 422
    end
  end

  def update
    @clap = Claps.find_by(id: params[:id])
    if @clap
      if @clap.update(clap_params)
        render 'api/claps/show'
      else
        render json: @clap.errors.full_messages, status: 422
      end
  end
  
  def show
    @clap = current_user.claps.find_by(story_id: params[:story_id])
    if @clap
      render 'api/claps/show'
    else
      render json: @clap.errors.full_messages, status: 422
    end
  end

  def index 
    @claps = Story.find_by(id: params[:story_id]).claps
    render 'api/claps/index'
  end

  private
  def clap_params
    params.require(:clap).permit(:user_id, :story_id, :clap_count)
  end
end
