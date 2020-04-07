class CreateWorkSpaces < ActiveRecord::Migration[5.2]
  def change
    create_table :work_spaces do |t|
      t.integer :user_id, null: false
      t.string :name, null: false

      t.timestamps
    end
    add_index :work_spaces, :user_id
    add_index :work_spaces, :name, unique: true
  end
end
