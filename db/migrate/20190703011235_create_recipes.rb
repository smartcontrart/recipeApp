class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, unique: :true
      t.text :instructions
      t.integer :preparation_time
      t.integer :cooking_time
      t.integer :total_recipe_time
      t.integer :calories
      t.integer :default_servings
      t.string :slug, unique: :true
    #   t.integer :user_id

      t.timestamps
    end
  end
end
