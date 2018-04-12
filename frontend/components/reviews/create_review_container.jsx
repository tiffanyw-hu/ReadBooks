import {connect} from 'react-redux';
import React from 'react';
import {createReview} from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => {
  let book = ownProps.book
  let formType = "Write a Review"
  let review = {body: "", rating: null, book_id: ownProps.bookId }
  return {review, formType, book}
}

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(createReview(review)),
})

const CreateReviewContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ReviewForm)

export default CreateReviewContainer;
