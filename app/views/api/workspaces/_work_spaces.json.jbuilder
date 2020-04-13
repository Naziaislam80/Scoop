json.extract! work_spaces, :id, :name, :user_id, :channels

channels = []
work_spaces.channels.each do |channel|
    channels.push(channel.id)
end
json.channel_ids = channels

users = []
work_spaces.users.each do |user|
    users.push(user.id)
end
json.users_ids = users