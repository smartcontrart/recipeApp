# frozen_string_literal: true
 
class User < ActiveRecord::Base 
    extend Devise::Models
    include DeviseTokenAuth::Concerns::User
    after_save :create_user_mealplan
    has_many :posts
    has_many :comments
    has_many :mealplans
    has_many :days
    has_many :meals
    # has_many :recipes
    has_and_belongs_to_many :ingredients
    has_one :parameter

    has_many :blog_comments
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
            :recoverable, :rememberable, :trackable, :validatable
    
    

    def create_user_mealplan
        if self.mealplans.length === 0
            Mealplan.create(name: "My first mealplan", description:"This is my first mealplan", user_id: self.id)
            Parameter.create(user_id: self.id)
        end
    end

  
end
