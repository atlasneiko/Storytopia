class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :subtitle
      t.text :body, null: false
    end
    add_index :stories, :title, unique: true
    add_index :stories, :user_id
  end
end
