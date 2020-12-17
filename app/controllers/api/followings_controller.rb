class Api::FollowingsController < ApplicationController
  def create
    @following = Following.new
    @following.follower_id = current_user.id
    @following.followee_id = params[:id]
    if @following.save
      render 'api/followings/show'
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  def destroy
    @following = Following.where(
      followee_id: params[:id],
      follower_id: current_user.id
    )
    if @following.destory
      render 'api/followings/show'
    else
      render json: @following.errors.full_messages, status: 422
    end
  end
  
end
