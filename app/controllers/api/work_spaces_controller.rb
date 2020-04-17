class Api::WorkSpacesController < ApplicationController
        def index
            @work_spaces = WorkSpace.all
            render :index
        end
        def show
            @work_space = WorkSpace.find_by(user_id: params[:user_id])
            if @work_space
                render :show
            else
            render json: ['Direct message does not exist'], status: 404
        end
    end
        def create
        @work_space = WorkSpace.new(work_space_params)

        if @work_space.save
            render :show
        else
            render json: @work_space.errors.full_messages, status: 422
        end
    end

    private
    def membership_params
        params.require(:membership).permit(:user_id, :name)
    end
end