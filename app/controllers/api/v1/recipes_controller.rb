module Api
    module V1
        class RecipesController < ApplicationController
            
            def index

                if params[:user_id] 
                    user = current_api_v1_user()
                    @recipes = user.recipes.last(10).reverse
                    render json: @recipes, include: '**'
                elsif params[:meal_id]
                    meal = Meal.find(params[:meal_id])
                    @recipes = meal.recipes
                    render json: @recipes, include: '**'
                else
                    @recipes = Recipe.all.last(10).reverse
                    render json: @recipes, include: '**'
                end
            end

            def show
                @recipe = Recipe.find_by(name: params[:name])
                render json: {recipe: @recipe, ingredients: @recipe.ingredients, quantities: @recipe.quantities}, status: 201
            end

            def filteredRecipes
                filters = params[:filters]
                @filteredRecipes = Recipe.all
                if filters != []
                    for filter in filters
                        filteredRecipe = Category.where(name: filter).first.recipes
                        for recipe in filteredRecipe
                            @filteredRecipes = @filteredRecipes - [recipe]
                        end
                    end
                end
                render json: @filteredRecipes
            end

            def search
                letter = params[:char]
                @recipes = Recipe.where("name like ?", "%" + letter + "%").limit(10)
                render json: @recipes, status: 201
            end
        
            def suggestions
                @recipes = Recipe.suggestions
                render json: @recipes
            end
        end
    end
end

