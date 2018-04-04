class Shelf < ApplicationRecord

  validates: :name, presence: true
  validates: :name, uniqueness: true

  belongs_to :user
  
end
