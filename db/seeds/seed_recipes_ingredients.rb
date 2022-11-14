
path_recipes_ingredients = File.join(File.dirname(__FILE__),'/recipes_ingredients_seed.csv')
puts 'seeding recipe ingredients'
# File.readlines(path_recipes_ingredients).each do |line|
#     rowArray = line.delete('\"').strip.split(",,")
#     recipe_id = rowArray[0].to_i
    
#     if recipe_id === 0 
#         recipe_id = rowArray[0][1..-1].to_i
#     end
#     # binding.pry
#     ingredient_name = rowArray[1]
#     quantity_measure = rowArray[2].to_f
#     quantity_unit = rowArray[3]
#     # binding.pry
#     recipe = Recipe.find(recipe_id)
#     @ingredient = Ingredient.find_or_create_by(name: ingredient_name)
#     @quantity = Quantity.create(measure: quantity_measure, unit: quantity_unit, recipe_id: recipe.id, ingredient_id: @ingredient.id)
#     recipe.ingredients << @ingredient
#     recipe.save
# end

UNITS=[
    'bulb', 
    'bulbs', 
    'bunch', 
    'bunches', 
    'clove', 
    'cloves', 
    'cube', 
    'cubes', 
    'cup', 
    'cups', 
    'dash', 
    'dashes', 
    'drop', 
    'drops', 
    'gallon', 
    'gallons', 
    'head', 
    'heads', 
    'leaf', 
    'leaves', 
    'loaf', 
    'loafs', 
    'ounce', 
    'ounces', 
    'package', 
    'packages', 
    'pinch', 
    'pinches', 
    'pint', 
    'pints', 
    'pound', 
    'pounds', 
    'quart', 
    'quarts', 
    'scoop', 
    'scoops', 
    'serving', 
    'servings', 
    'sheet', 
    'sheets', 
    'sleeve', 
    'sleeves', 
    'slice', 
    'slices', 
    'sprig', 
    'sprigs', 
    'squeeze', 
    'stick', 
    'sticks', 
    'strip', 
    'strips', 
    'tablespoon', 
    'tablespoons', 
    'teaspoon', 
    'teaspoons']

def convertToNumber(string)
    isANumber = true
    if string.include?('/')
        string_components = string.split('/')
        result = string_components[0].to_f/string_components[1].to_f
    elsif string.to_f > 0.0
        result = string.to_f
    else
        # binding.pry
        isANumber = false
    end
    
    if isANumber
        return result
    else 
        return false
    end
end

File.readlines(path_recipes_ingredients).each do |line|
    sleep(0.05)
# def parse_ingredient_list
    list = line.split('@@')
    # recipe_id = list[0][0] === "" ? 1 : list[0].to_i
    recipe_id =  list[0][0].to_i === 0 ? list[0][1..-1].to_i : list[0].to_i
    # binding.pry
    recipe = Recipe.find(recipe_id)
    list.shift()
    # list[0] = list[0].delete("['")
    list[-1] = list[-1].delete("\r\n")
    # binding.pry
    # list.gsub("' '", "@@")
    # list.split("@@")
    list.each do |ingredient|
        begin
            # recipe = Recipe.find(list[0])            
            ingredient_components = ingredient.split(' ')
            measure = 0.0
            found_measure = false
            unit = ""
            found_unit = false
            ingredient_name = ""
            ingredient_components.each do |component|
                
                if found_measure === false
                    temp_measure = convertToNumber(component)
                    if temp_measure === false
                        found_measure = true
                    else 
                        measure += temp_measure
                    end
                end
    
    
                if found_unit === false && found_measure === true
                    if UNITS.include?(component)
                        unit += component
                    else
                        found_unit = true
                    end
                end
    
                if found_unit === true && found_measure === true
                    ingredient_name = ingredient_name + " " + component
                end
            end
            # binding.pry
            measure = (measure/recipe.default_servings).round(1)
            
            @ingredient = Ingredient.find_or_create_by(name: ingredient_name)
            @quantity = Quantity.create(measure: measure, unit: unit, ingredient_id: @ingredient.id, recipe_id: recipe.id)
            recipe.ingredients << @ingredient
            recipe.quantities << @quantity
        rescue => exception
            puts exception.message
            # ingredient_id = @ingredient.id ? @ingredient.id : 0
            # quantity_id = @quantity.id ? @quantity.id : 0
        # Error.create(error_message: exception.message, recipe_id: recipe_id, ingredient_id: ingredient_id, quantity_id: quantity_id)
        end
    end
end

# def parse(ingredient)
#     begin
#         recipe_id = self.id            
#         ingredient_components = ingredient.split(' ')
#         measure = 0.0
#         found_measure = false
#         unit = ""
#         found_unit = false
#         ingredient_name = ""
#         ingredient_components.each do |component|
            
#             if found_measure === false
#                 temp_measure = convertToNumber(component)
#                 if temp_measure === false
#                     found_measure = true
#                 else 
#                     measure += temp_measure
#                 end
#             end


#             if found_unit === false && found_measure === true
#                 if UNITS.include?(component)
#                     unit += component
#                 else
#                     found_unit = true
#                 end
#             end

#             if found_unit === true && found_measure === true
#                 ingredient_name = ingredient_name + " " + component
#             end
#         end
#         @ingredient = Ingredient.find_or_create_by(name: ingredient_name)
#         @quantity = Quantity.create(measure: measure, unit: unit, ingredient_id: @ingredient.id, recipe_id: self.id)
#         self.ingredients << @ingredient
#         self.quantities << @quantity
#     rescue => exception
#         ingredient_id = @ingredient.id ? @ingredient.id : 0
#         quantity_id = @quantity.id ? @quantity.id : 0
#     Error.create(error_message: exception.message, recipe_id: recipe_id, ingredient_id: ingredient_id, quantity_id: quantity_id)
#     end
# end