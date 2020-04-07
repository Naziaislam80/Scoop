class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :title, null: false
      t.integer :work_space_id, null: false
      t.timestamps
    end
    add_index :channels, :work_space_id
  end
end
