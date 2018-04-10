export const fetchReviews = (bookId) => (
  $.ajax({
    method: 'GET',
    url: `api/reviews/`
  })
)
