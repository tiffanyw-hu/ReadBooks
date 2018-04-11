# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  title      :string
#  body       :string
#  user_id    :integer
#  book_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord

  validates :body, :rating, :user_id, :book_id, presence: true
  validates :book_id, uniqueness: {scope: :user_id}
  validate :blank_review

  belongs_to :book
  belongs_to :user


  private

  def blank_review
    unless (self.body == "") && (self.rating == nil)
      if (self.rating == "")
        errors.add("The rating cannot be blank.")
      elsif (self.body == "")
        errors.add("The body cannot be blank.")
      end
    end
  end

end
