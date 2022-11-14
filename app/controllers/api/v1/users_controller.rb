module Api
    module V1
        class UsersController < ApplicationController
            before_action :authenticate_api_v1_user!
            
            def show_ingredients
                @user = current_api_v1_user()
                render json: @user.ingredients
            end
        
        end
    end
end

