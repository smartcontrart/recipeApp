# require 'pry'
class GroceriesList < ApplicationRecord
    belongs_to :mealplan
    has_many :days, through: :mealplan
    has_many :meals, through: :days
    has_many :recipes, through: :meals
    has_many :quantities_multiplicators, through: :meals
    has_many :ingredients, through: :recipes
    has_many :quantities, through: :recipes

    def generate

        quantities_multiplicators = self.quantities_multiplicators
        # debugger
        quantities = []
        summed_quantities = []

        quantities_multiplicators.each do |qm|
            # debugger
            # qm.meals.each do |meal|
                qm.meal.quantities.each do |quantity|
                    if index = summed_quantities.index{|sum_quantity| sum_quantity[:ingredient_id] == quantity.ingredient_id} 
                        summed_quantities[index] = {measure: (summed_quantities[index][:measure] + quantity.measure * qm.multiplicator), unit: summed_quantities[index][:unit], ingredient_id: summed_quantities[index][:ingredient_id], recipe_id: summed_quantities[index][:recipe_id]}
                    else
                        # debugger
                        summed_quantities << {measure: quantity[:measure] * qm.multiplicator, unit: quantity[:unit], ingredient_id: quantity[:ingredient_id], recipe_id: quantity[:recipe_id]}
                    end
                end
            # end
        end
        return summed_quantities
    end
end