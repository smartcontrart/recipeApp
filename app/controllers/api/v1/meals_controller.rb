module Api
    module V1
        class MealsController < ApplicationController
            # before_action :authenticate_api_v1_user!
            # skip_before_action :authenticate_api_v1_user!, only: [:index]
            
            def index
                if params[:user_id] 
                    @user = current_api_v1_user()
                    @meals = user.meals.last(10).reverse
                    render json: @meals, include: '**'
                elsif params[:day_id]
                    day = Day.find(params[:day_id])
                    @meal = day.meals
                    render json: @meals
                else
                    @meals = Meal.all.last(10).reverse
                    render json: @meals
                end
            end

            def update
                @meal = Meal.find(params[:id])
                @meal.recipes = @meal.recipes.reject { |recipe| recipe[:id] == request.headers["recipe-id"].to_i }
                if @meal.recipes.length === 0 
                    @meal.delete
                    render json: nil
                else 
                    render json: @meal, include: "**"  
                end
            end
        
        end
    end
end

