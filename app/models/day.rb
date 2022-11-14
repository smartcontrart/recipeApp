class Day < ApplicationRecord
    has_and_belongs_to_many :mealplans
    has_many :meals
    accepts_nested_attributes_for :meals
    belongs_to :user
end
