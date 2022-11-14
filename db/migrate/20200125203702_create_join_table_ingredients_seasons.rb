class CreateJoinTableIngredientsSeasons < ActiveRecord::Migration[5.2]
  def change
    create_join_table :ingredients, :seasons do |t|
      t.index [:ingredient_id, :season_id]
      # t.index [:season_id, :ingredient_id]
    end
  end
end
