json.extract! book, :id, :title, :author, :img_url, :description
# json.reviews_name do
#   book.reviews.each do |review|
#     json.set! review.user.id do
#       json.partial! "api/reviews/bookreview", review: review
#     end
#   end
# end
json.shelvings book.shelvings
json.shelves book.shelves
json.reviews book.reviews, :user, :body, :rating, :id, :book_id
book.shelves.each do |shelf|
  if currentUser
    if shelf.user_id == currentUser.id
      if shelf.name == "Read" || shelf.name == "Want to Read" || shelf.name == "Currently Reading"
        json.reading_status shelf
      end
    end
  end
end
