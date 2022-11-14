class CreateJoinTableQuantitiesMultiplicatorsRecipes < ActiveRecord::Migration[5.2]
  def change
    create_join_table :quantities_multiplicators, :recipes do |t|
      t.index [:quantities_multiplicator_id, :recipe_id], name: 'idx_recipes_quantities_multl_on_quantities_mult_and_recipes'
      # t.index [:recipe_id, :quantities_multiplicator_id]
    end
  end
end
