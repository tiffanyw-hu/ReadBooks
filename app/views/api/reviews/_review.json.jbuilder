json.extract! review, :id, :title, :body, :user_id, :book_id
json.book @review.book
json.username @review.user.username
