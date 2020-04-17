class Api::MessagesController < ApplicationController
    def index
        
        @channel = Channel.find(params[:channelId])
       
        @messages = @channel.messages
        render :index
    end

    def show
        @message = Message.find(params[:id])
        render :show
    end

    def create
        @message = Message.new(message_params)
        if @message.save 
            message = {
                id: @message.id,
                user_id: @message.user_id,
                channel_id: @message.channel_id,
                body: @message.body,
                created_at: @message.created_at,
                updated_at: @message.updated_at
            }
            ChatChannel.load(message.as_json)
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end

        
    end

    def update
        @message = current_user.message.find_by(id: params[:id])
        if @message.update(message_params)
            render :show
        else
            render json: @message.errors.full_messages, status: 401
        end
    end

    private
    def message_params
        params.require(:message).permit(:body, :user_id, :channel_id)
    end
end