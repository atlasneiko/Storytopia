module Clapable
  extend ActiveSupport::Concern

  included do
    has_many :claps, 
      as: :clapable, 
      class_name: :Clap,
      dependent: :destroy
  end

  def receive_clap(name)
    slef.claps.find_or_create_by(name)
  end
end