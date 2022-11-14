class MealplanSerializer < ActiveModel::Serializer
    attributes :id, :name
    # has_and_belongs_to_many :days
    has_many :days

    # def days_data
    #     object.days.collect do |day|
    #       { :meals => day.meals }
    #     end
    # end

    # def days_data
    #     days = new Hash
    #     object.posts.map{|day|
    #         day[:id] = day.id
    #         day[:name] = day.name
    #         day[:meals] = day.meals}
    #     end
    #     return days
    # end

end
