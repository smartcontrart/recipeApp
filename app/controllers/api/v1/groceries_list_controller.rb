module Api
    module V1
        class GroceriesListController < ApplicationController
            before_action :authenticate_api_v1_user!

            def create
                # debugger
                # Need to fix getting the correct MealPlan - for now, looking for the last meal plan of the user - same in the client (Plan Component)
                if !params[:mealplan_id]
                    user = current_api_v1_user()
                    @mealplan = Mealplan.where(user_id: user.id).last
                else
                    @mealplan = Mealplan.find(params[:mealplan_id])
                end

                if !@mealplan.groceries_list
                    # debugger
                    @groceries_list = GroceriesList.create(mealplan_id: @mealplan.id)
                else
                    @groceries_list = @mealplan.groceries_list 
                end
                # debugger
                quantities = @groceries_list.generate

                render json: {ingredients: @groceries_list.ingredients.uniq, quantities: quantities}
            end

            def show
            end

        end
    end
end
