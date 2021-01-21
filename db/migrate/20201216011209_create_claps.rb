class CreateClaps < ActiveRecord::Migration[5.2]
  def change
    create_table :claps do |t|
      t.integer :user_id, null: false
      t.integer :story_id, null: false
      t.integer :clap_count, null: false, default: 0
      t.timestamps
    end
    add_index :claps, :user_id
    add_index :claps, :story_id
  end
end
