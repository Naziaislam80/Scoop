
class Api::ChannelSubscribersController < ApplicationController
      def index
        @channel_subscribers = channel_subscribers.all
        render :index
    end

    def show
        @channel_subscriber = channel_subscriber.find(params[:id])
        if @channel_subscriber
            render :show
        else
            render json: ['Channel subscription does not exist'], status: 404
        end
    end

    def create
        @channel_subscriber = ChannelSubscriber.new(channel_subscriber_params)

        if @channel_subscriber.save
            render :show
        else
            render json: @channel_subscriber.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel_subscriber = ChannelSubscriber.find(params[:id])
        if @channel_subscriber
            @channel_subscriber.destroy
        end
    end

    private
    def channel_subscriber_params
        params.require(:channel_subscriber).permit(:user_id, :channel_id)
    end
end