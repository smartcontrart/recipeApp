class CreateJoinTableGroceriesListsIngredients < ActiveRecord::Migration[5.2]
  def change
    create_join_table :groceries_lists, :ingredients do |t|
      t.index [:groceries_list_id, :ingredient_id], name: 'idx_groceries_ingredients_on_groceries_and_ingredient'
      # t.index [:ingredient_id, :groceries_list_id]
    end
  end
end

# index_categories_recipes_on_category_id_and_recipe_id