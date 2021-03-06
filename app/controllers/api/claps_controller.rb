class Api::ClapsController < ApplicationController
  before_action :required_logged_in, except: [:index, :show]

  def index
    @claps = Clap.find_by(clapable_id: params[:story_id])
    print @claps
    render 'api/claps/index'
  end

  def show
    @clap = Clap.find_by(id: params[:id])
    if @clap
      render 'api/claps/show'
    else
      render json["clap not exist."]
    end
  end

  def create
    @clap = Clap.new(clap_params)
    if @clap.save
      render 'api/claps/show'
    else
      render json: @clap.errors.full_messages, status: 422
    end
  end

  def update
    @clap = Clap.find_by(id: params[:id])
    if @clap && @clap.update(clap_params)
      render 'api/claps/show'
    else
      render json: @clap.errors.full_messages, status: 422
    end
  end
  
  
  

  private
  def clap_params
    params.require(:clap).permit(:user_id, :clapable_id, :clap_count, :clapable_type)
  end
end
