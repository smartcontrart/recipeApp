
seasonal_ingredients_path = File.join(File.dirname(__FILE__),'/seasonal_ingredients.csv')

puts 'seeding seasons ingredients'
File.readlines(seasonal_ingredients_path).each do |seasonal_ingredient|
    sleep(0.05)
    rowArray = seasonal_ingredient.split(';')
    @ingredient = Ingredient.find_or_create_by(name: rowArray[0])
    period = rowArray[2].delete("\r\n")
    season = Season.find_by(state: rowArray[1], period: period)
    season.ingredients << @ingredient
    season.save
end