module Api
    module V1
        class MealplansController < ApplicationController
            before_action :authenticate_api_v1_user!
            # skip_before_action :authenticate_api_v1_user!
            
            def index
                # debugger
                if request.headers["uid"] 
                    @user = current_api_v1_user()
                    @mealplans = @user.mealplans.last(10)
                    render json: @mealplans
                end
            end

            def userLastMealplan
                @user = current_api_v1_user()
                render json: @user.mealplans.all.last, include: 'days.**'
            end

            def create
                @user = current_api_v1_user()
                # Delete the user's ingredients to generate a fresh groceires list for the new mealplan 
                @user.ingredients = []
                # debugger
                @mealplan = Mealplan.create(name: params[:mealplan_name], user_id: @user.id)
                render json: @mealplan
            end

            def show
                if params[:id]
                    @mealplan = Mealplan.find(params[:id])
                    render json: @mealplan
                else
                    render json: {errors: "Mealplan does not exist"}, status: 422
                end
            end


            def update
                @user = current_api_v1_user()
                @mealplan = Mealplan.find(params[:id])
                response = @mealplan.addOrRemoveRecipe(params["to-do"], @user.id, params["day-name"], params["meal-name"], params["recipe-id"], params["multiplicator"])
                render json: response
            end


            # def update
            #     if params[:id]
            #         @user = User.find_by(email: request.headers["uid"])
            #         @mealplan = Mealplan.find(params[:id])
            #         if @mealplan.user === @user
            #             mealplanDays = @mealplan.days
            #             date = Date.parse(request.headers["day-date"]).strftime("%F")
            #             if @day = mealplanDays.find_by(date: date)
            #                 # Pass as we will update the mealplan day
            #             else
            #                 # Create a new day for the mealplan
            #                 @day = Day.new(date: date, user_id: @user.id)
            #                 @mealplan.days << @day
                            
            #             end

            #             if @meal = @day.meals.find_by(name: request.headers["meal-id"])
            #                 # Pass as we will update the meal
            #             else
            #                 # Create a new meal
            #                 @meal = Meal.new(name: request.headers["meal-id"], order: @day.meals.length + 1, user_id: @user.id)
                            
            #             end

            #             # Find the recipe and include it in the meal
            #             recipe = Recipe.all.find(request.headers["recipe-id"])
            #             @meal.recipes << recipe
                        
            #             # Check in the day already include this meal to avoid duplicates
            #             if !@day.meals.include?(@meal)
            #                 # if not included we add the meal to the day meals
            #                 @day.meals << @meal
            #             else
            #                 # Return error as meal already exists in the day
            #             end
            #             @mealplan.save
            #             @meal.save
            #             @day.save
            #         else
            #             # Return error as user and mealplan owners are not the same
            #         end
            #         render json: @day, include: "**"
            #     end
            # end
        
        end
    end
end

