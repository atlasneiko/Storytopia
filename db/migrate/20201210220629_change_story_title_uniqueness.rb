class ChangeStoryTitleUniqueness < ActiveRecord::Migration[5.2]
  def change
    remove_index :stories, :title
    add_index :stories, [:title, :subtitle], unique: true
  end
end
// 