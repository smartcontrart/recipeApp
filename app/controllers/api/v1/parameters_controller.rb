module Api
    module V1
        class ParametersController < ApplicationController
            before_action :authenticate_api_v1_user!
            
            def index
                @user = current_api_v1_user()
                render json: @user.parameter
            end
            
            def update
                @user = current_api_v1_user()
                @parameter = @user.parameter
                @parameter.update(parameter_settings)
                # debugger
                if @parameter.save
                    render json: @user.parameter, status: 201
                else
                    render json: {errors: @parameter.errors.full_messages}, status: 422
                end

            end

            private
            def parameter_settings
                params.require(:settings).permit(:week_starting_day, :default_number_of_guests, :is_gluten_free, :is_vegetarian, :is_vegan, :shellfish_allergic, :nuts_allergic, :lactose_intolerant)
            end


        end
    end
end
