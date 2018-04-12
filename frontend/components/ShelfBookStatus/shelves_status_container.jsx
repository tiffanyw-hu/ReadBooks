import {connect} from 'react-redux';
import React from 'react';
import {createShelving, deleteShelving} from '../../actions/shelving_actions';
import ShelvesStatus from './shelves_status';

const mapStateToProps = (state, ownProps) => {
  let userShelves = state.entities.shelves
  let bookId = ownProps.bookId
}

const mapDispatchToProps = dispatch => ({
  action: review => dispatch(createReview(review)),
})

const CreateReviewContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ReviewForm)

export default CreateReviewContainer;
