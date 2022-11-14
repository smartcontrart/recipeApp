class Recipe < ApplicationRecord
    after_initialize :create_slug
    has_and_belongs_to_many :meals
    has_and_belongs_to_many :ingredients
    has_and_belongs_to_many :categories
    has_many :quantities
    has_many :quantities_multiplicators
    accepts_nested_attributes_for :ingredients
    # belongs_to :user

    def create_slug
        slug = name.split(" " ).join("-")
        self.slug = slug
    end 

    def self.suggestions
        self.all.last(10).reverse
    end
end
