# == Schema Information
#
# Table name: stories
#
#  id       :bigint           not null, primary key
#  user_id  :integer          not null
#  title    :string           not null
#  subtitle :string
#  body     :text             not null
#
class Story < ApplicationRecord
  validates :title, :body, :user_id, presence: true
  belongs_to :user
  
  
end
