class EducationsController < ApplicationController

    def create
        education = User.first.educations.create(education_params)
        if education.valid?
            render json: education, status: :created
        else
            render json: {error: "PLease fill out all forms"}, status: :expectation_failed
        end
    end

    private

    def education_params
        params.permit(:school, :degree, :start_date, :end_date, :user_id)
    end
end
