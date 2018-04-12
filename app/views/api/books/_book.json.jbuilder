json.extract! book, :id, :title, :author, :img_url, :description
json.shelvings book.shelvings
json.shelves book.shelves
json.reviews book.reviews
book.shelves.each do |shelf|
  if shelf.user_id == currentUser.id
    if shelf.name == "Read" || shelf.name == "Want to Read" || shelf.name == "Currently Reading"
      json.reading_status shelf
    end
  end
end
