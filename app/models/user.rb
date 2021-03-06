# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  about           :string
#
class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length:{minimum: 6}, allow_nil: true

  has_many :stories
  has_many :comments
  has_many :claps

  has_many :users_following,
    foreign_key: :followee_id,
    class_name: :Following
  
  has_many :user_follows,
    foreign_key: :follower_id,
    class_name: :Following

  has_many :followers,
    through: :users_following,
    source: :follower

  has_many :followees,
    through: :user_follows,
    source: :followee



  attr_reader :password
  
  after_initialize :ensure_session_token!
  
  def self.find_by_credentials(username, password)
  user = User.find_by(username: username)
  user && user.is_password?(password) ? user : nil
  end
  
  def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
  BCrypt::Password.new(self.password_digest) == password
  end
  
  def reset_session_token!
  self.session_token = SecureRandom.urlsafe_base64
  self.save!
  self.session_token
  end
  
  private
  
  def ensure_session_token!
  self.session_token ||= SecureRandom.urlsafe_base64
  end

end
