channel_subscribers.each do |channel_subscriber|
    json.set! channel_subscriber.id do
        json.partial! 'channel_subscriber', channel_subscriber: channel_subscriber
    end
end 