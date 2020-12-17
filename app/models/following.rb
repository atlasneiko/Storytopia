# == Schema Information
#
# Table name: followings
#
#  id          :bigint           not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Following < ApplicationRecord
  validates :follower_id, :followee_id, presence: true
  validate :no_narcissist

  belongs_to :followee,
    class_name: :User

  belongs_to :follower,
    class_name: :User



  def no_narcissist
    if self.followee_id == self.follower_id
      self.errors[:User] << "No NARCISSISTS!"
    end
  end
  
end
