# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_11_031747) do

  create_table "blog_comments", force: :cascade do |t|
    t.text "content"
    t.integer "user_id"
    t.integer "blog_post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "blog_posts", force: :cascade do |t|
    t.string "title"
    t.string "summary"
    t.text "content"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories_recipes", id: false, force: :cascade do |t|
    t.integer "category_id", null: false
    t.integer "recipe_id", null: false
    t.index ["category_id", "recipe_id"], name: "index_categories_recipes_on_category_id_and_recipe_id"
  end

  create_table "comments", force: :cascade do |t|
    t.text "message"
    t.integer "likes", default: 0
    t.integer "post_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "days", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "days_mealplans", id: false, force: :cascade do |t|
    t.integer "day_id", null: false
    t.integer "mealplan_id", null: false
    t.index ["day_id", "mealplan_id"], name: "index_days_mealplans_on_day_id_and_mealplan_id"
  end

  create_table "days_meals", id: false, force: :cascade do |t|
    t.integer "day_id", null: false
    t.integer "meal_id", null: false
    t.index ["day_id", "meal_id"], name: "index_days_meals_on_day_id_and_meal_id"
  end

  create_table "groceries_lists", force: :cascade do |t|
    t.integer "mealplan_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "groceries_lists_ingredients", id: false, force: :cascade do |t|
    t.integer "groceries_list_id", null: false
    t.integer "ingredient_id", null: false
    t.index ["groceries_list_id", "ingredient_id"], name: "idx_groceries_ingredients_on_groceries_and_ingredient"
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name"
    t.integer "calories"
    t.boolean "contains_gluten", default: false
    t.boolean "contains_nuts", default: false
    t.boolean "contains_dairy", default: false
    t.boolean "shellfish", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ingredients_recipes", id: false, force: :cascade do |t|
    t.integer "ingredient_id", null: false
    t.integer "recipe_id", null: false
    t.index ["ingredient_id", "recipe_id"], name: "index_ingredients_recipes_on_ingredient_id_and_recipe_id"
  end

  create_table "ingredients_seasons", id: false, force: :cascade do |t|
    t.integer "ingredient_id", null: false
    t.integer "season_id", null: false
    t.index ["ingredient_id", "season_id"], name: "index_ingredients_seasons_on_ingredient_id_and_season_id"
  end

  create_table "ingredients_users", id: false, force: :cascade do |t|
    t.integer "ingredient_id", null: false
    t.integer "user_id", null: false
    t.index ["ingredient_id", "user_id"], name: "index_ingredients_users_on_ingredient_id_and_user_id"
  end

  create_table "mealplans", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meals", force: :cascade do |t|
    t.string "name"
    t.integer "order"
    t.integer "party_size"
    t.integer "day_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meals_recipes", id: false, force: :cascade do |t|
    t.integer "meal_id", null: false
    t.integer "recipe_id", null: false
    t.index ["meal_id", "recipe_id"], name: "index_meals_recipes_on_meal_id_and_recipe_id"
  end

  create_table "parameters", force: :cascade do |t|
    t.integer "user_id"
    t.string "week_starting_day", default: "Monday"
    t.integer "default_number_of_guests", default: 1
    t.boolean "is_gluten_free", default: false
    t.boolean "is_vegetarian", default: false
    t.boolean "is_vegan", default: false
    t.boolean "shellfish_allergic", default: false
    t.boolean "nuts_allergic", default: false
    t.boolean "lactose_intolerant", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.text "message"
    t.boolean "is_reshare", default: false
    t.integer "reshare", default: 0
    t.integer "likes", default: 0
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "quantities", force: :cascade do |t|
    t.decimal "measure"
    t.string "unit"
    t.integer "ingredient_id"
    t.integer "recipe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "quantities_multiplicators", force: :cascade do |t|
    t.integer "multiplicator"
    t.integer "meal_id"
    t.integer "recipe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "quantities_multiplicators_recipes", id: false, force: :cascade do |t|
    t.integer "quantities_multiplicator_id", null: false
    t.integer "recipe_id", null: false
    t.index ["quantities_multiplicator_id", "recipe_id"], name: "idx_recipes_quantities_multl_on_quantities_mult_and_recipes"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.text "instructions"
    t.integer "preparation_time"
    t.integer "cooking_time"
    t.integer "total_recipe_time"
    t.integer "calories"
    t.integer "default_servings"
    t.string "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "seasons", force: :cascade do |t|
    t.string "state"
    t.string "period"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "name"
    t.string "username"
    t.string "image"
    t.string "email"
    t.string "state"
    t.text "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

end
