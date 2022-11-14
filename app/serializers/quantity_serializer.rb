class QuantitySerializer < ActiveModel::Serializer
    attributes :id, :measure,:unit, :recipe_id, :ingredient_id
end
