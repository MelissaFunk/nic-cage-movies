class User < ApplicationRecord
  has_many :views
  has_many :movies, through: :views
  
  has_secure_password

  validates :username, :password, presence: true
  validates :username, uniqueness: true
end
