class IntroductionsController < ApplicationController

    def create
        intro = User.first.introductions.create(intro_params)
        if intro.valid?
            render json: intro, status: :created
        else
            render json: {error: "PLease fill out all forms"}, status: :expectation_failed
        end
    end

    private

    def intro_params
        params.permit(:summary, :user_id)
    end
end
