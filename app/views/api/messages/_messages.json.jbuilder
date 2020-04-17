json.extract! message, :id, :user_id, :body, :channel_id, :created_at, :updated_at

json.created_at message.created_at.strftime("%m/%d/%Y at%l:%M:%S%P")
json.display_name message.user.username