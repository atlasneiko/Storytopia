class AddClapableToClaps < ActiveRecord::Migration[5.2]
  def change
    add_reference :claps, :clapable, polymorphic: true

    add_index :claps, [:user_id, :clapable_id], unique: true

  end
end
