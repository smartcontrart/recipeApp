class CreatePosts < ActiveRecord::Migration[5.2]
    def change
      create_table :posts do |t|
        t.text :message
        t.boolean :is_reshare, default: false
        t.integer :reshare, default: 0
        t.integer :likes, default: 0
        t.integer :user_id
  
        t.timestamps
      end
    end
  end