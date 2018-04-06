# == Schema Information
#
# Table name: shelvings
#
#  id         :integer          not null, primary key
#  book_id    :integer
#  shelf_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelving < ApplicationRecord

  validates :book_id, :shelf_id, presence: true
  validates :book_id, uniqueness: {scope: :shelf_id}

  belongs_to :book
  belongs_to :shelf

end
