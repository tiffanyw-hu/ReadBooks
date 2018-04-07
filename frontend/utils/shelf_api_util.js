export const fetchShelves = () => (
  $.ajax({
    method: 'GET',
    url: 'api/shelves',
  })
)

export const fetchShelf = id => (
  $.ajax({
    method: 'GET',
    url: `api/shelves/${id}`,
  })
)

export const createShelf = shelf => (
  $.ajax({
    method: 'POST',
    url: `api/shelves`,
    data: {shelf}
  })
)

export const updateShelf = shelf => (
  $.ajax({
    method: 'PATCH',
    url: `api/shelves/${shelf.id}`,
    data: {shelf}
  })
)

export const deleteShelf = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/shelves/${id}`,
  })
)
