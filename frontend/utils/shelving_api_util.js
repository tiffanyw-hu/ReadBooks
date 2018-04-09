export const createShelving = (shelving) => (
  $.ajax({
    method: 'POST',
    url: 'api/shelvings',
    data: {shelving}
  })
)

export const deleteShelving = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/shelvings/${id}`,
  })
)
