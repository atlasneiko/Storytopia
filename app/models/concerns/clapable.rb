module Clapable
  extend ActiveSupport::Concern

  included do
    has_many :claps, 
      as: :clapable, 
      class_name: :Clap,
      dependent: :destroy
  end

end