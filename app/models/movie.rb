class Movie < ApplicationRecord
  has_many :views
  has_many :users, through: :views
end
