class BlogPostSerializer < ActiveModel::Serializer
  
  
    attributes :id, :title,:summary, :content, :slug
    has_many :blog_comments
end
