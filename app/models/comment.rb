class Comment < ApplicationRecord
  validates :user_id, :story_id, :body, presence: true

  belongs_to :user
  belongs_to :story

  has_many :claps, as: :clapable
end
