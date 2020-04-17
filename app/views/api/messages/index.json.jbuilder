users = []
@messages.each do |message|
    json.set! message.id do
        json.partial! 'api/messages/messages', message: message
    end
    if !users.include?(message.user)
        users.push(message.user)
    end
end

users.each do |user|
    json.set! user.id do 
        json.partial! "api/users/user", user: user, general_channel: general_channel
    end
end