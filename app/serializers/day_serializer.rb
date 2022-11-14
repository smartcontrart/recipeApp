class DaySerializer < ActiveModel::Serializer
    attributes :id, :name
    has_many :meals

    # def meals
    #     object.meals.collect do |meal|
    #       { :recipes => meal.recipes }
    #     end
    # end
end
