@shelves.each do |shelf|
  json.set! shelf.id do
    json.partial! "api/shelf/shelf" shelf: shelf
  end 
end
