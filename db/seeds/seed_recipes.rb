path_recipes = File.join(File.dirname(__FILE__),'/recipes_seed.csv')
CATEGORIES=["Category 1", "Category 2", "Category 3"]
puts 'seeding recipes'

for category in CATEGORIES do
    Category.create(name: category)
end

File.readlines(path_recipes).each do |line|
    sleep(0.05)
    rowArray = line.delete('\"').strip.split("@@")
    recipe_name = rowArray[1]
    recipe_prep_time = rowArray[2]
    recipe_cook_time = rowArray[3]
    recipe_total_time = rowArray[4]
    recipe_default_servings = rowArray[5]
    recipe_process = rowArray[6]
    recipe_calories = rowArray[7]

    @recipe = Recipe.create(name: recipe_name,
    instructions: recipe_process, 
    preparation_time: recipe_prep_time, 
    cooking_time: recipe_cook_time, 
    total_recipe_time: recipe_total_time, 
    calories: recipe_calories,
    default_servings: recipe_default_servings)

    numberOfCategories = rand(3)

    for category in 0..numberOfCategories
        @recipe.categories << Category.all.find(category+1)
        @recipe.save
    end

end