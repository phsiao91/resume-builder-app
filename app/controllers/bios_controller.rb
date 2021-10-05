class BiosController < ApplicationController
    # before_action :confirm_authentication
    def index
        render json: Bio.all
    end

    def create
        bio = User.first.bios.create(bio_params)
        if bio.valid?
            render json: bio, status: :ok
        else
            render json: {errors: "Please fill out all the forms"}, status: :expectation_failed
        end
    end

    def destroy
        bio = Bio.find_by(id: params[:id])
        bio.destroy
        head :no_content
    end

    private

    def bio_params
        params.permit(:name, :address, :phone, :email, :linkedin)
    end
end
