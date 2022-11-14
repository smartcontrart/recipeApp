
module Api
    module V1
        class IngredientsController < ApplicationController
            before_action :authenticate_api_v1_user!
            skip_before_action :authenticate_api_v1_user!, only: [:index]
            
            def index
                if params[:recipe_id]
                    recipe = Recipe.find(params[:recipe_id])
                    @ingredients = recipe.ingredients
                else
                    authenticate_api_v1_user!
                    @user = current_api_v1_user()
                end
                render json: @user.ingredients
            end

            def update
                @user = current_api_v1_user()
                @ingredient = Ingredient.find(params[:id])
                
                if @user.ingredients.include?(@ingredient)
                    @user.ingredients.delete(@ingredient)
                else
                    @user.ingredients.push(@ingredient)
                end
                @user.save
    
                render json: @user.ingredients
            end

        end
    end
end
