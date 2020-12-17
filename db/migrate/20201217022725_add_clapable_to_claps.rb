class AddClapableToClaps < ActiveRecord::Migration[5.2]
  def change
    add_reference :claps, :clapable, polymorphic: true, index: true

    add_index :claps, [:clapable_id, :clapable_type], unique: true
  end
end
