class RemoveStoryFromClap < ActiveRecord::Migration[5.2]
  def change
    remove_column :claps, :story_id
  end
end
