class Api::WorkSpacesController < ApplicationController
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