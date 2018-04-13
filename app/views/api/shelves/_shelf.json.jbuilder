json.extract! shelf, :id, :name, :user_id, :books
json.books shelf.books, :id, :title, :author, :description, :img_url, :reviews
json.shelvings shelf.shelvings
