class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]


  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  def show 
    @user = User.find_by(id: params[:id])
    if @user
      render 'api/users/show'
    else
      render json: ['This user does not exist'], status: 404
    end
  end
  
  def update
    @user = User.find_by(id: params[:id])
    if @user && @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index 
    @users = User.all
    render 'api/users/index'  
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :about)
  end
end
