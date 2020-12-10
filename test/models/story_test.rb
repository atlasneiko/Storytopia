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
require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
