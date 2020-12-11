# == Schema Information
#
# Table name: stories
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  subtitle   :string           not null
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Story < ApplicationRecord
  validates :title, :subtitle, :user_id, :body, presence: true

  belongs_to :user
=======
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
