import {connect} from 'react-redux';
import React from 'react';
import {fetchReview, updateReview, deleteReview} from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  let book = ownProps.book
  let formType = "Edit Review"
  let review = ownProps.review
  let bookId = ownProps.bookId
  return {review, formType, bookId, book};
}

const mapDispatchToProps = dispatch => ({
  fetchReview: review => dispatch(fetchReview(review)),
  action: review => dispatch(updateReview(review)),
  deleteReview: review => dispatch(deleteReview(review))
})

const EditReviewContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ReviewForm)

export default EditReviewContainer;
