class Mealplan < ApplicationRecord
    after_initialize :create_mealplan_days, if: :new_record?

    has_and_belongs_to_many :days
    accepts_nested_attributes_for :days
    belongs_to :user
    has_one :groceries_list

    # def self.create(name, description, user_id)
    #     mealplan = Mealplan.new(name: name, description: description, user_id: user_id)
    #     day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    #     for day_name in day_names
    #         day = Day.create(name: day_name, user_id: user_id)
    #         day.save
    #         mealplan.days << day
    #     end
    #     mealplan.save
    #     return mealplan
    # end

    def create_mealplan_days
        day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        for day_name in day_names
            day = Day.create(name: day_name, user_id: user_id)
            day.save
            self.days << day
        end
    end

    def addOrRemoveRecipe(action, userId, day_name, meal_name, recipe_id, multiplicator)
        # Create boolean to track the level to include in the response (recipe if meal and day already exists, meal if day already exist or day)
        created_or_destroyed_day = false
        created_or_destroyed_meal = false
        # debugger
        # Declare a variable to track the highest level of data modified and to be returnes
        level = "recipe"

        # Look for the mealplan to modify
        
        
        # Look for the day.
        day = self.days.find_by(name: day_name)

        # Given the day, look for the meal, if doesn't exist, create it and add to the day
        meal = day.meals.find_by(name: meal_name)
        if !meal
            meal = Meal.create(name: meal_name, user_id: user_id)
            created_or_destroyed_meal = true
            day.meals << meal
        end
        

        # Find the recipe (will alway exist)
        recipe = Recipe.find(recipe_id)
        
        # if the action is to add the recipe, we add it to the meal
        if action==="Add"
            meal.recipes << recipe
            # When the recipe is added to the meal, we can create the associated quantities multiplicator
            
            # We start by looking the default number of guest for the user concerned
            user = User.find(user_id)
            # default_number_of_guests = user.parameter.default_number_of_guests
            # We then create the quantities multiplicator for the recipe/meal combination
            meal_recipe_quantites_multiplicator = QuantitiesMultiplicator.create(multiplicator: multiplicator, meal_id: meal.id, recipe_id: recipe.id)


        # if the action is to remove the recipe, we remove it
        elsif action === "Remove"
            meal.recipes.delete(recipe)

            # If we emove the recipe, we also delete the associated quantites multiplicator for the meal/recipe combination
            # As there is only on quantity_multiplicator per meal/recipe combination, we can always remove the first occurence
            meal_recipe_quantites_multiplicator = meal.quantities_multiplicators.where(recipe_id: recipe.id).first
            if meal_recipe_quantites_multiplicator
                meal_recipe_quantites_multiplicator.delete
            end
            # Check if it was the last recipe of the meal, if so, destroy the meal
            if meal.recipes.length === 0
                meal.destroy
                created_or_destroyed_meal = true
            end
            # Check if it was the last meal of the day, if so, destroy the day

        end

        # Save the variables
        self.save
        day.save
        meal.save

        # The level tells the front end where to edit its state.
        # For a recipe removal, a level "day" tells that it was
        # the last recipe of the day, hence the front end should delete it
        # same for a meal

        # For a recipe addition, the level tells the front end what to create
        # either just the recipe, the recipe and meal or recipe, meal and day
        
        if created_or_destroyed_day
            level = "day"
        elsif created_or_destroyed_meal
            level = "meal"
        end

        # return {level: level, day: day, meal: meal, recipe: recipe}
        return {level: level, day: day, meal: meal, quantities_multiplicator: meal_recipe_quantites_multiplicator, recipe: recipe}
    end
end
