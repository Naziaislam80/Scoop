class CreateChannelSubscribers < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_subscribers do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    add_index :channel_subscribers, :user_id
    add_index :channel_subscribers, :channel_id
  end
end
