class CreateBlogPosts < ActiveRecord::Migration[5.2]
    def change
        create_table :blog_posts do |t|
        t.string :title, unique: :true
        t.string :summary
        t.text :content
        t.string :slug, unique: :true
        t.timestamps
        end
    end
end
