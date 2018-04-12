json.extract! review, :id, :body, :user_id, :book_id
json.book @review.book
json.username @review.user.username
