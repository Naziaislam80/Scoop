class ChatChannel < ApplicationCable::Channel
  def subscribed
    # @channel = Channel.find(params[:id])
    # stream_for @channel
    stream_for "chat_channel"
  end

  def speak(data)
    message = @channel.messages.new(body: data['message'])
    message.user_id = current_user.id  
    message.channel_id = @channel.id 
    if message.save!
      socket = { message: message.to_json, type: 'message' }
      ChatChannel.broadcast_to(@channel, socket)
    end
  end

  def self.load(message)
    socket = { messages: message, type: 'messages' }
    ChatChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed
    
  end

end