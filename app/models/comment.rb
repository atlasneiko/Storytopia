class Comment < ApplicationRecord
  validates :user_id, :story_id, :body, presence: true
  include Clapable
  belongs_to :user
  belongs_to :story
  has_many :claps, as: :clapable
end
