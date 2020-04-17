class Api::ChannelsController < ApplicationController
    def index
        @channels = Channel.all
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
        # ActiveRecord::Base.transaction do
        @channel = Channel.new(channel_params)
        # debugger
        @channel.work_space_id = WorkSpace.first.id

        if @channel.save

          

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