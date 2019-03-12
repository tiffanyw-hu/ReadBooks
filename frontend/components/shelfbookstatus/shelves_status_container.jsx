import {connect} from 'react-redux';
import React from 'react';
import {createShelving, deleteShelving} from '../../actions/shelving_actions';
import ShelvesStatus from './shelves_status';
import {fetchShelves} from '../../actions/shelf_actions';

const mapStateToProps = (state, ownProps) => {
  let userShelves = state.entities.shelves
  // this list is so we know what's being passed in ownProps
  let book = ownProps.book
  let bookId = ownProps.bookId
  let shelvings = ownProps.shelvings
  let readingStatus = ownProps.reading_status
  return {userShelves}
}

const mapDispatchToProps = dispatch => ({
  createShelving: shelving => dispatch(createShelving(shelving)),
  deleteShelving: id => dispatch(deleteShelving(id)),
  fetchShelves: () => dispatch(fetchShelves())
})

const ShelvesStatusContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ShelvesStatus)

export default ShelvesStatusContainer;
