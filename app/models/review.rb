class Review < ApplicationRecord

  validates :title, :body, :user_id, :book_id, presence: true
  validates :book_id, uniqueness: {scope: :user_id}
  validate :blank_review

  belongs_to :book
  belongs_to :user


  private

  def blank_review
    unless (self.body == "") && (self.title == "")
      if (self.title == "")
        errors.add("The title cannot be blank.")
      elsif (self.body == "")
        errors.add("The body cannot be blank.")
      end
    end 
  end

end
