import * as ReviewAPIUtil from '../utils/review_api_util';
import {receiveBook} from './book_actions';

export const fetchReviews = (bookId) => dispatch => (
  ReviewAPIUtil.fetchReviews(bookId).then(book => dispatch(receiveBook(book)))
)

export const fetchReview = (review) => dispatch => (
  ReviewAPIUtil.fetchReview(review).then(book => dispatch(receiveBook(book)))
)

export const createReview = review => dispatch => (
  ReviewAPIUtil.createReview(review).then(book => dispatch(receiveBook(book)))
)

export const deleteReview = review => dispatch => (
  ReviewAPIUtil.deleteReview(review).then(book => dispatch(receiveBook(book)))
)

export const updateReview = review => dispatch => (
  ReviewAPIUtil.updateReview(review).then(book => dispatch(receiveBook(book)))
)
