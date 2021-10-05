class SkillsController < ApplicationController

    def create
        skill = User.first.skills.create(skill_params)
        if skill.valid?
            render json: skill, status: :ok
        else
            render json: {error: "PLease fill out all forms"}, status: :expectation_failed
        end
    end

    def destroy
        skill = Skill.find_by(id: params[:id])
        skill.destroy
        head :no_content
    end

    private

    def skill_params
        params.permit(:expertise, :rating)
    end
end
