# == Schema Information
#
# Table name: shelves
#
#  id         :integer          not null, primary key
#  name       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelf < ApplicationRecord

  validates :name, presence: true
  validates :name, uniqueness: { scope: :user_id,
  message: "that shelf name already exists" }

  belongs_to :user
  has_many :shelvings,
    foreign_key: :shelf_id,
    class_name: :Shelving
  has_many :books,
    through: :shelvings

end
