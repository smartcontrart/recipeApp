module Api
    module V1
        class DaysController < ApplicationController
            before_action :authenticate_api_v1_user!
            skip_before_action :authenticate_api_v1_user!, only: [:index]
            
            def show
                if request.headers["uid"] 
                    @day = Day.find_by(id: params[:id])
                    render json: @day
                end
            end


            # def index
            #     if params[:user_id] 
            #         user = User.find(params[:user_id])
            #         @days = user.days.last(10).reverse
            #         render json: @days, include: '**'
            #     elsif params[:mealplan_id]
            #         mealplan = Mealplan.find(params[:mealplan_id])
            #         @days = mealplan.day
            #         render json: @days
            #     else
            #         @days = Day.all.last(10).reverse
            #         render json: @days
            #     end
            # end
        
        end
    end
end

