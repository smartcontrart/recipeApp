class PostSerializer < ActiveModel::Serializer
  attributes :id, :message, :likes, :reshare
  has_many :comments
end
