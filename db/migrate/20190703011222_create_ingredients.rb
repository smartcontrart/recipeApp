class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :calories
    #   t.string :unit
      # List of allergies
      t.boolean :contains_gluten, :default => false
      t.boolean :contains_nuts, :default => false
      t.boolean :contains_dairy, :default => false
      t.boolean :shellfish, :default => false
      t.timestamps
    end
  end
end
