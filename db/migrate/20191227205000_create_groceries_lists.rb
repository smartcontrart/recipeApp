class CreateGroceriesLists < ActiveRecord::Migration[5.2]
  def change
    create_table :groceries_lists do |t|
        t.integer :mealplan_id
      t.timestamps
    end
  end
end
