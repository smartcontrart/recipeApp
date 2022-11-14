class ParametersSerializer < ActiveModel::Serializer
    attributes :id, :user_id, :is_gluten_free, :is_vegetarian, :is_vegan, :shellfish_allergic, :nuts_allergic, :lactose_intolerant, :week_starting_day, :default_number_of_guests 

end