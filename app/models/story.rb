# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  subtitle   :string           not null
#  user_id    :integer          not null
#  body       :text             not null
#  img_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Story < ApplicationRecord
  include Clapable
  validates :title, :body, :user_id, presence: true
  belongs_to :user
  # has_many :claps  
  

end
