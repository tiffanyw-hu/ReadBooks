@shelves.each do |shelf|
  json.set! shelf.id do
    json.partial! "api/shelves/shelf" shelf: shelf
  end 
end
