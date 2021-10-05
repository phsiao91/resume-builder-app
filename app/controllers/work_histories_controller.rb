class WorkHistoriesController < ApplicationController


    def create
        
        wh = User.first.work_histories.create(wh_params)
        byebug
        if wh.valid?
            render json: wh, status: :created
        else
            render json: {error: "Please fill out all the forms"}, status: :expectation_failed
        end
    end

    def destroy
        wh = WorkHistory.find_by(id: params[:id])
        wh.destroy
        head :no_content
    end
    
    private

    def wh_params
        params.permit(:title, :company, :start_date, :end_date, :user_id)
    end
    
end
