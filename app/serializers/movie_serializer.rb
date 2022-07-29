class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :image, :link, :category, :decade
  has_many :views
end