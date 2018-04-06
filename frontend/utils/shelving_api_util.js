export const createShelving = () => (
  $.ajax({
    method: 'POST',
    url: 'api/books/',
  })
)

export const deleteShelving = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/books/${id}`,
  })
)
