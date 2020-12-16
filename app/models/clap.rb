# == Schema Information
#
# Table name: claps
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  story_id   :integer          not null
#  clap_count :integer          default(1), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Clap < ApplicationRecord


end
