class CreateParameters < ActiveRecord::Migration[5.2]
  def change
    create_table :parameters do |t|
        t.integer :user_id
        t.string :week_starting_day, :default => "Monday"
        t.integer :default_number_of_guests, :default => 1
        t.boolean :is_gluten_free, :default => false
        t.boolean :is_vegetarian, :default => false
        t.boolean :is_vegan, :default => false
        # t.boolean :is_keto
        t.boolean :shellfish_allergic, :default => false
        t.boolean :nuts_allergic, :default => false
        t.boolean :lactose_intolerant, :default => false
        t.timestamps
    end
  end
end
