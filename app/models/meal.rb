class Meal < ApplicationRecord
    belongs_to :day
    has_and_belongs_to_many :recipes
    has_many :quantities_multiplicators
    has_many :quantities, through: :recipes
    accepts_nested_attributes_for :recipes
    belongs_to :user
end
