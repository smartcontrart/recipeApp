class CreateJoinTableDayMeal < ActiveRecord::Migration[5.2]
  def change
    create_join_table :days, :meals do |t|
      t.index [:day_id, :meal_id]
      # t.index [:meal_id, :day_id]
    end
  end
end
