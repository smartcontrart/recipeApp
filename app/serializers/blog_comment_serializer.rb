class BlogCommentSerializer < ActiveModel::Serializer
    has_one :user
    attributes :id, :content, :user, :created_at
    # attributes (:username) {username(user.username)}

    

end
