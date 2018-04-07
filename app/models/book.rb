# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string
#  author      :string
#  img_url     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#

class Book < ApplicationRecord

  validates :title, :author, :img_url, :description, presence: true
  validates :img_url, uniqueness: true

  has_many :shelvings
  has_many :shelves,
    through: :shelvings
  has_many :reviews

end
