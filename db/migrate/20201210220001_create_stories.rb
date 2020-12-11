class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title, null:false
      t.string :subtitle, null:false
      t.integer :user_id, null:false
      t.text :body, null:false
      t.timestamps
    end
    add_index :stories, :user_id
    add_index :stories, :title, :unique => true
  end
end
