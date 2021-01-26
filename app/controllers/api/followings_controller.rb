class Api::FollowingsController < ApplicationController
  def create
    @following = Following.new
    @following.follower_id = current_user.id
    @following.followee_id = params[:following][:followee_id]
    if @following.save
      render 'api/followings/show'
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  
  
  
  def destroy
    @following = Following.find_by(
      follower_id: following_params[:follower_id],
      followee_id: following_params[:followee_id]
    )
    if @following.destroy
      render 'api/followings/show'
    else
      render json["You cannot unfollow this person."]
    end
  end
  private 
  def following_params
    params.require(:following).permit(:follower_id, :followee_id)
  end
end
