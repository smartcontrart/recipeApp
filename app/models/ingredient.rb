class Ingredient < ApplicationRecord
    has_and_belongs_to_many :recipes
    has_and_belongs_to_many :users
    has_and_belongs_to_many :groceries_lists
    has_many :quantities
    has_and_belongs_to_many :seasons

    def self.has_no_seasons
        results = []
        for ingredient in Ingredient.all
            if ingredient.seasons = []
                results << ingredient
            end
        end 
        return results
    end
    
end
