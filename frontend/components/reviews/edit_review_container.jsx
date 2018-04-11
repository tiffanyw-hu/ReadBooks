import {connect} from 'react-redux';
import React from 'react';
import {fetchReview, updateReview} from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  let formType = "Edit Review"
  let review = ownProps.review
  let bookId = ownProps.bookId
  return {review, formType, bookId};
}

const mapDispatchToProps = dispatch => ({
  fetchReview: review => dispatch(fetchReview(review)),
  action: review => dispatch(updateReview(review)),
})

const EditReviewContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ReviewForm)

export default EditReviewContainer;
