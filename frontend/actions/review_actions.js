import * as ReviewAPIUtil from '../utils/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE-REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const fetchReviews = (bookId) => dispatch => (
  ReviewAPIUtil.fetchReviews(bookId).then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = (review) => dispatch => (
  ReviewAPIUtil.fetchReview(review).then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => (
  ReviewAPIUtil.createReview(review).then(review => dispatch(receiveReview(review)))
)

export const deleteReview = review => dispatch => (
  ReviewAPIUtil.deleteReview(review).then(reviewId => dispatch(removeReview(review.id)))
)
