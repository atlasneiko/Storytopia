class RemoveTitleSubtitleUniqueness < ActiveRecord::Migration[5.2]
  def change
    remove_index :stories, column: [:title, :subtitle]

  end
end
