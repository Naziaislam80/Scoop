@users.each do |user|
    json.set! user.id do 
        json.partial! "api/users/user", user: user, general_channel: general_channel
    end
end