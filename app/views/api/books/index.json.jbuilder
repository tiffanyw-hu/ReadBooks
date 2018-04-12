@books.each do |book|
  json.set! book.id do
    json.partial! "api/books/book", book: book, currentUser: @user
  end
end
