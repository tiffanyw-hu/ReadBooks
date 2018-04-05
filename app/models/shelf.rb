class Shelf < ApplicationRecord

  validates :name, presence: true
  validates :name, uniqueness: true

  belongs_to :user
  has_many :shelvings,
    foreign_key: :shelf_id,
    class_name: :Shelving
  has_many :books,
    through: :shelvings

end
