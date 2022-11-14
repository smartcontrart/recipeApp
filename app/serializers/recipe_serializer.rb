class RecipeSerializer < ActiveModel::Serializer
    attributes :id, :name,:slug, :instructions, :calories, :cooking_time, :preparation_time ,:total_recipe_time
    has_many :ingredients
    has_many :quantities
end
