class CreateJoinTableDayMealplan < ActiveRecord::Migration[5.2]
  def change
    create_join_table :days, :mealplans do |t|
      t.index [:day_id, :mealplan_id]
      # t.index [:mealplan_id, :day_id]
    end
  end
end
