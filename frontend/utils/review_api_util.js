export const fetchReviews = (bookId) => (
  $.ajax({
    method: 'GET',
    url: `api/books/${bookId}/reviews`
  })
)

export const deleteReview = review => (
  $.ajax({
    method: 'DELETE',
    url: `api/books/${review.book_id}/reviews/${review.id}`,
  })
)

export const fetchReview = review => (
  $.ajax({
    method: 'GET',
    url: `api/books/${review.book_id}/reviews/${review.id}`,
  })
)

export const updateReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `api/books/${review.book_id}/reviews/${review.id}`,
    data: { review },
  })
)

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: `api/books/${review.book_id}/reviews/`,
    data: {review},
  })
)
