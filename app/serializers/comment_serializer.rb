class CommentSerializer < ActiveModel::Serializer
  attributes :id, :message, :likes, :post_id 
#   belongs_to :post
end
