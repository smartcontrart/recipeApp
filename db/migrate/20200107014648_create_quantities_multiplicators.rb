class CreateQuantitiesMultiplicators < ActiveRecord::Migration[5.2]
  def change
    create_table :quantities_multiplicators do |t|
        t.integer :multiplicator
        t.integer :meal_id
        t.integer :recipe_id
      t.timestamps
    end
  end
end
