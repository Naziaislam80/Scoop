json.extract! message, :id, :user_id, :body, :channel_id, :created_at, :updated_at

json.display_name message.user.display_name