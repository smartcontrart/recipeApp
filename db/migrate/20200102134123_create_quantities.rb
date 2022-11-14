class CreateQuantities < ActiveRecord::Migration[5.2]
  def change
    create_table :quantities do |t|
        t.decimal :measure
        t.string :unit
        t.integer :ingredient_id
        t.integer :recipe_id

        t.timestamps
    end
  end
end
