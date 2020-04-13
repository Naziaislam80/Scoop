class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.all.includes(:work_space_id)
        render :index
    end

    def show  
        @channel = Channel.find(params[:id])
        if @channel
            render :show
        else
            render json: ['Channel does not exist'], status: 404
        end
    end

    def create
        @channel = Channel.new(channel_params)
        @channel.work_space_id.user_id = current_user.id

        if @channel.save
           ChannelSubscriber.create!(user_id: @channel.user_id, channel_id: @channel.id)

            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find(params[:id])
        if @channel
            @channel.destroy
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end

    end

    private
    def channel_params
        params.require(:channel).permit(:title, :work_space_id)
    end

end