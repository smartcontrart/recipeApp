class MealSerializer < ActiveModel::Serializer
    attributes :id, :name, :order
    has_many :recipes
    has_many :quantities_multiplicators
    # has_many :days
end
