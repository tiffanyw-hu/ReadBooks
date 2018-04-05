class Book < ApplicationRecord

  validates :title, :author, :img_url, :description, presence: true
  validates :img_url, uniqueness: true

  has_many :shelvings
  has_many :bookshelves,
    through: :shelvings
  has_many :reviews

end
