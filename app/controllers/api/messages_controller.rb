class Api::MessagesController < ApplicationController
    def index
        @messages = Message.all.includes(:user, :channel_id)
        render :index
    end

    def show
        @message = Message.find(params[:id])
        render :show
    end

    def create
        # not needed, Action Cable will take care of it
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