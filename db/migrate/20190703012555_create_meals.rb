class CreateMeals < ActiveRecord::Migration[5.2]
  def change
    create_table :meals do |t|
      t.string :name
      t.integer :order
      t.integer :party_size
      t.integer :day_id
      t.integer :user_id

      t.timestamps
    end
  end
end
