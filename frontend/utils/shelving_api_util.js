export const createShelving = (shelving) => (
  $.ajax({
    method: 'POST',
    url: 'api/shelvings',
    data: {shelving}
  })
)

export const deleteShelving = (shelving) => (
  $.ajax({
    method: 'DELETE',
    url: `api/shelvings`,
  })
)
